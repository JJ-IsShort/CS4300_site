struct VertexInput {
  @location(0) pos: vec2f,
  @builtin(instance_index) instance: u32,
};

struct Particle {
  pos: vec3f,
};

@group(0) @binding(0) var<uniform> frame: f32;
@group(0) @binding(1) var<uniform> res:   vec2f;
@group(0) @binding(2) var<storage> state: array<Particle>;

const SCALE_XY: f32 = 0.038;
const SCALE_Z:  f32 = 0.038;

@vertex 
fn vs( input: VertexInput ) ->  @builtin(position) vec4f {
  let size = input.pos * .005;
  let aspect = res.y / res.x;
  let p = state[ input.instance ];
  let scaled_pos = vec3f(p.pos.x * SCALE_XY, p.pos.y * SCALE_XY, p.pos.z * SCALE_Z);
  return vec4f( scaled_pos.x * (1/scaled_pos.z) - size.x * aspect * (1/scaled_pos.z), scaled_pos.y * (1/scaled_pos.z) + size.y * (1/scaled_pos.z), 0., 1.); 
}

@fragment 
fn fs( @builtin(position) pos : vec4f ) -> @location(0) vec4f {;
  let blue = .5 + sin( frame / 60. ) * .5;
  // let back_color = textureSample(back_buffer, back_sampler, pos.xy/res);
  return vec4f( pos.x / res.x, pos.y / res.y, blue, 1.0 );//vec4f( max(pos.x / res.x, back_color.x*0.999), max(pos.y / res.y, back_color.y*0.999), max(blue, back_color.z*0.999) , 1 );
}
