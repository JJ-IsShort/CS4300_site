@group(0) @binding(0) var<uniform> resolution: vec2f;
@group(0) @binding(1) var videoSampler:   sampler;
@group(0) @binding(2) var backBuffer:     texture_2d<f32>;
@group(0) @binding(3) var<uniform> mouse_pos: vec3f;
@group(0) @binding(4) var<uniform> k_height: f32;
@group(0) @binding(5) var<uniform> k_pow: f32;
@group(0) @binding(6) var<uniform> r_sharpness: vec3f;

@group(1) @binding(0) var videoBuffer:    texture_external;

fn random (st: vec2f) -> f32 {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))
                 * 43758.5453123);
}

fn noise (st: vec2f) -> f32 {
    let i: vec2f = floor(st);
    let f: vec2f = fract(st);

    // Four corners in 2D of a tile
    let a = random(i);
    let b = random(i + vec2(1.0, 0.0));
    let c = random(i + vec2(0.0, 1.0));
    let d = random(i + vec2(1.0, 1.0));

    // Smooth Interpolation

    // Cubic Hermine Curve.  Same as SmoothStep()
    let u: vec2f = f*f*(3.0-2.0*f);
    // u = smoothstep(0.,1.,f);

    // Mix 4 coorners percentages
    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

fn kernel(off: vec2f, video: vec4f) -> f32 {
  let dist = length(off);
  let ring_dist = max(k_height-pow(abs(video.r - dist),k_pow), 0);
  return ring_dist;
}

fn remap(in: vec3f, video: vec4f) -> vec3f {
  return vec3f(max((1-abs(video.r - in.r)) * r_sharpness.r - (r_sharpness.r - 1), 0), max((1-abs(video.g - in.g)) * r_sharpness.g - (r_sharpness.g - 1), 0), max((1-abs(video.b - in.b)) * r_sharpness.b - (r_sharpness.b - 1), 0));
}

@fragment 
fn fs( @builtin(position) pos : vec4f ) -> @location(0) vec4f {
  let p = pos.xy / resolution;

  let video = textureSampleBaseClampToEdge( videoBuffer, videoSampler, p );

  let fb = textureSample( backBuffer, videoSampler, p );

  const bounds = 2;
  var acc = vec4f(0);
  var mult_acc = 0.0;
  for (var x = -bounds; x <= bounds; x++) {
    for (var y = -bounds; y <= bounds; y++) {
      let offN = vec2f(f32(x)/bounds, f32(y)/bounds);
      let mult = kernel(offN, video);
      mult_acc = mult_acc + mult;
      acc = acc + textureSample( backBuffer, videoSampler, p + vec2f(f32(x)/resolution.x,f32(y)/resolution.y) ) * mult;
    }
  }
  acc = acc / mult_acc;

  let cell = remap(acc.xyz, video);
  let noised = noise(p*128.0);
  let out = clamp(select(cell, vec3f(noised), mouse_pos.z != 0 && (length(mouse_pos.xy - p) < 0.1)), vec3f(0.), vec3f(1.));

  return vec4f( out.rgb, 1. );
}
