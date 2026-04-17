struct Particle {
  pos: vec3f,
};

@group(0) @binding(0) var<uniform> res:   vec2f;
@group(0) @binding(1) var<storage, read_write> state: array<Particle>;

fn cellindex( cell:vec3u ) -> u32 {
  let size = 8u;
  return cell.x + (cell.y * size) + (cell.z * size * size);
}

const SIGMA: f32 = 10.0;
const RHO:   f32 = 28.0;
const BETA:  f32 = 2.6667;
const DT:    f32 = 0.0003;

@compute
@workgroup_size(8,8)
fn cs(@builtin(global_invocation_id) cell:vec3u)  {
  let i = cellindex(cell);
  let p = state[i];

  let lx = p.pos.x;
  let ly = p.pos.y;
  let lz = p.pos.z;

  let dx = SIGMA * (ly - lx);
  let dy = lx * (RHO - lz) - ly;
  let dz = lx * ly - BETA * lz;

  let nx = lx + dx * DT;
  let ny = ly + dy * DT;
  let nz = lz + dz * DT;

  state[i].pos = vec3f(nx, ny, nz);
}
