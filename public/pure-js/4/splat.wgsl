@group(0) @binding(0) var back_sampler: sampler;
@group(0) @binding(1) var back_buffer:  texture_2d<f32>;
@group(0) @binding(2) var<uniform> res: vec2f;

@fragment
fn fs(@builtin(position) pos: vec4f) -> @location(0) vec4f {
  let uv = pos.xy / res;
  let c = textureSample(back_buffer, back_sampler, uv);
  return vec4f(c.rgb * 0.999, 1.0);
}
