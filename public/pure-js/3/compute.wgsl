@group(0) @binding(0) var<uniform> res: vec2f;
@group(0) @binding(1) var<storage> statein: array<f32>;
@group(0) @binding(2) var<storage, read_write> stateout: array<f32>;
@group(0) @binding(3) var<uniform> mouse: vec3f;
@group(0) @binding(4) var<uniform> style_1_mul_props: vec4f;
@group(0) @binding(5) var<uniform> style_base_props: vec4f;
@group(0) @binding(6) var<uniform> style_2_mul_props: vec4f;

fn index( x:i32, y:i32, b: bool ) -> u32 {
  let _res = vec2i(res);
  return u32( (((y % _res.y) + _res.y) % _res.y) * _res.x + ((x % _res.x) + _res.x) % _res.x ) * 2 + u32(b);
}

// The randomness is a wgsl port of noise from the book of shaders
// https://thebookofshaders.com/edit.php#11/2d-gnoise.frag
fn random2(st: vec2f) -> vec2f {
    let st2 = vec2( dot(st,vec2(127.1,311.7)),
                    dot(st,vec2(269.5,183.3)) );
    return -1.0 + 2.0*fract(sin(st2)*43758.5453123);
}

fn noise(st: vec2f) -> f32 {
    let i: vec2f = floor(st);
    let f: vec2f = fract(st);

    let u: vec2f = f*f*(3.0-2.0*f);

    return mix( mix( dot( random2(i + vec2f(0.0,0.0) ), f - vec2f(0.0,0.0) ),
                     dot( random2(i + vec2f(1.0,0.0) ), f - vec2f(1.0,0.0) ), u.x),
                mix( dot( random2(i + vec2f(0.0,1.0) ), f - vec2f(0.0,1.0) ),
                     dot( random2(i + vec2f(1.0,1.0) ), f - vec2f(1.0,1.0) ), u.x), u.y);
}

fn laplacian(x: i32, y: i32, b: bool) -> f32 {
  return (statein[ index(x + 1, y + 1, b) ] * 0.05 +
          statein[ index(x + 1, y, b)     ] * 0.2  +
          statein[ index(x + 1, y - 1, b) ] * 0.05 +
          statein[ index(x, y - 1, b)     ] * 0.2  +
          statein[ index(x - 1, y - 1, b) ] * 0.05 +
          statein[ index(x - 1, y, b)     ] * 0.2  +
          statein[ index(x - 1, y + 1, b) ] * 0.05 +
          statein[ index(x, y + 1, b)     ] * 0.2  +
          statein[ index(x, y, b)         ] * -1);
}

@compute
@workgroup_size(8,8)
fn cs( @builtin(global_invocation_id) _cell:vec3u ) {
  let cell = vec3i(_cell);
  let _res = vec2i(res);
  if (cell.x >= _res.x || cell.y >= _res.y) { return; }

  let style_1 = 0.1 + noise(vec2f(_cell.xy)/90.) * 0.9;
  let style_2 = 0.1 + noise(vec2f(_cell.xy)/60. + 300.) * 0.9;
  
  let feed = style_base_props.x + (style_1_mul_props.x * style_1 + style_2_mul_props.x * style_2) / 2.;
  let kill = style_base_props.y + (style_1_mul_props.y * style_1 + style_2_mul_props.y * style_2) / 2.;
  let d_a = style_base_props.z + (style_1_mul_props.z * style_1 + style_2_mul_props.z * style_2) / 2.;
  let d_b = style_base_props.w + (style_1_mul_props.w * style_1 + style_2_mul_props.w * style_2) / 2.;
  let delta_time = 1.0;

  let oldA = statein[ index(cell.x, cell.y, false) ];
  let oldB = statein[ index(cell.x, cell.y, true)  ];

  let newA = oldA + (d_a * laplacian(cell.x, cell.y, false) - oldA * pow(oldB, 2) + feed * (1 - oldA)) * delta_time;
  let newB = oldB + (d_b * laplacian(cell.x, cell.y, true) + oldA * pow(oldB, 2) - (kill + feed) * oldB) * delta_time;

  let aspect = res.x/res.y;
  let aspect_scale = vec2f(aspect, 1.0);
  let mouse_active = mouse.z != 0.0 && (length(vec2f(cell.xy) / res * aspect_scale - mouse.xy * aspect_scale) < 0.05);
  stateout[ index(cell.x, cell.y, false) ] = clamp(select(newA, 0.0, mouse_active), 0.0, 1.0);
  stateout[ index(cell.x, cell.y, true)  ] = clamp(select(newB, 1.0, mouse_active), 0.0, 1.0);
}
