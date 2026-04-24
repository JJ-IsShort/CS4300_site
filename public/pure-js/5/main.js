import { default as gulls } from "./gulls/gulls.js";
import { default as Mouse } from "./gulls/helpers/mouse.js";
import { Pane } from "https://cdn.jsdelivr.net/npm/tweakpane@4.0.5/dist/tweakpane.min.js";

const errorOverlay = document.getElementById("error-overlay");
const errorMessage = document.getElementById("error-message");

function showError(msg) {
  // I love how this error thing looks and the funny thing is that
  // ideally no one will ever see it.
  errorMessage.textContent = msg;
  errorOverlay.classList.add("visible");
}

const infoOverlay = document.getElementById("info-overlay");
const infoMessage = document.getElementById("info-message");

function showInfo(msg) {
  infoMessage.textContent = msg;
  infoOverlay.classList.add("visible");
}
function hideInfo() {
  infoMessage.textContent = "";
  infoOverlay.classList.remove("visible");
}
const nextKeyPress = () => {
  return new Promise((resolve) => {
    window.addEventListener("keydown", resolve, { once: true });
  });
};

const print = console.log;

async function initWebGPU() {
  showInfo("Press number buttons 1 to 3 to select behaviour");
  const selected_key = await nextKeyPress();
  var selected_sim = parseInt(selected_key.key);
  if (isNaN(selected_sim)) {
    selected_sim = 1;
  }
  print(selected_sim);
  hideInfo();

  const sg = await gulls.init();
  const WORKGROUP_SIZE = 64,
    NUM_AGENTS = 256 / 4,
    DISPATCH_COUNT = [NUM_AGENTS / WORKGROUP_SIZE, 1, 1],
    GRID_SIZE = 2,
    STARTING_AREA = 0.3;
  const width = Math.round(window.innerWidth / GRID_SIZE),
    height = Math.round(window.innerHeight / GRID_SIZE);

  const render_shader =
    gulls.constants.vertex +
    `
@group(0) @binding(0) var<storage> pheromones: array<f32>;
@group(0) @binding(1) var<storage> render: array<f32>;

@fragment 
fn fs( @builtin(position) pos : vec4f ) -> @location(0) vec4f {
  let grid_pos = floor( pos.xy / ${GRID_SIZE}.);
  
  let pidx = grid_pos.y  * ${width}. + grid_pos.x;
  let p_sample = pheromones[ u32(pidx) ];
  let p = select(vec3(p_sample), select(vec3(0., 0.5, 0.5), select(vec3(0.75, 0.75, 0.), vec3(0.75, 0., 0.75), p_sample > 3.), p_sample > 2.), p_sample > 1.);
  let v = render[ u32(pidx) ];

  let out = select( p , select( vec3(1.,0.,0.), vec3(0., 0., 1.), v == 1.), v != 0. );
  
  return vec4f( out, 1. );
}`;

  const compute_shader = `
struct Vant {
  pos: vec2f,
  dir: f32,
  flag: f32
}

@group(0) @binding(0) var<storage, read_write> vants: array<Vant>;
@group(0) @binding(1) var<storage, read_write> pheremones: array<f32>;
@group(0) @binding(2) var<storage, read_write> render: array<f32>;

fn pheromoneIndex( vant_pos: vec2f ) -> u32 {
  let width = ${width}.;
  return u32( abs( vant_pos.y % ${height}. ) * width + vant_pos.x );
}

@compute
@workgroup_size(${WORKGROUP_SIZE},1,1)

fn cs(@builtin(global_invocation_id) cell:vec3u)  {
  let pi2   = ${Math.PI * 2}; 
  var vant:Vant  = vants[ cell.x ];

  let pIndex    = pheromoneIndex( vant.pos );
  let pheromone = pheremones[ pIndex ];

  ${selected_sim == 1
      ? `if( pheromone != 0. ) {
  vant.dir += select(.25,-.25,vant.flag==0.); // turn 90 degrees counter-clockwise
  pheremones[ pIndex ] = 0.;  // set pheromone flag
}else{
  vant.dir += select(-.25,.25,vant.flag==0.); // turn 90 degrees counter-clockwise
  pheremones[ pIndex ] = 1.;  // unset pheromone flag
}
`
      : selected_sim == 2
        ? `if( pheromone == 1. ) {
    vant.dir += select(.25,-.25,vant.flag==0.); // turn 90 degrees counter-clockwise
    pheremones[ pIndex ] = 2.;  // set pheromone flag
  } else if (pheromone == 2.) {
    vant.dir += select(-0.25,0.,vant.flag==0.);
    pheremones[ pIndex ] = 0.;
  } else {
    vant.dir += select(-.25,.25,vant.flag==0.); // turn 90 degrees counter-clockwise
    pheremones[ pIndex ] = 1.;  // unset pheromone flag
  }`
        : `if( pheromone == 1. ) {
    vant.dir += select(.25,-.25,vant.flag==0.); // turn 90 degrees counter-clockwise
    pheremones[ pIndex ] = 2.;  // set pheromone flag
  } else if (pheromone == 2.) {
    vant.dir += select(-0.25,0.,vant.flag==0.);
    pheremones[ pIndex ] = 3.;
  } else if (pheromone == 3.) {
    vant.dir += select(0.25,0.,vant.flag==0.);
    pheremones[ pIndex ] = 4.;
  } else if (pheromone == 4.) {
    vant.dir += select(0.,0.25,vant.flag==0.);
    pheremones[ pIndex ] = 0.;
  } else {
    vant.dir += select(-.25,.25,vant.flag==0.); // turn 90 degrees counter-clockwise
    pheremones[ pIndex ] = 1.;  // unset pheromone flag
  }`
    }

// calculate direction based on vant heading
let dir = vec2f(sin(vant.dir * pi2), cos(vant.dir * pi2));

vant.pos = round(vant.pos + dir);

vants[cell.x] = vant;

// we'll look at the render buffer in the fragment shader
// if we see a value of one a vant is there and we can color
// it accordingly. in our JavaScript we clear the buffer on every
// frame.
render[pIndex] = vant.flag + 1;
}`;

  const NUM_PROPERTIES = 4; // must be evenly divisble by 4!
  const pheromones = new Float32Array(width * height); // hold pheromone data
  const vants_render = new Float32Array(width * height); // hold info to help draw vants
  const vants = new Float32Array(NUM_AGENTS * NUM_PROPERTIES); // hold vant info

  const offset = 0.5 - STARTING_AREA / 2;
  for (let i = 0; i < NUM_AGENTS * NUM_PROPERTIES; i += NUM_PROPERTIES) {
    vants[i] = Math.floor((offset + Math.random() * STARTING_AREA) * width); // x
    vants[i + 1] = Math.floor(
      (offset + Math.random() * STARTING_AREA) * height,
    ); // y
    vants[i + 2] = 0; // direction
    vants[i + 3] = Math.round(Math.random()); // vant behavior type
  }
  // for (let i = 0; i < width; i += 1) {
  //   pheromones[i] = 2;
  //   pheromones[i + (height - 1) * width] = 2;
  // }
  // for (let i = 0; i < height; i += 1) {
  //   pheromones[i * width] = 2;
  //   pheromones[i * width + width - 1] = 2;
  // }

  const pheromones_b = sg.buffer(pheromones);
  const vants_b = sg.buffer(vants);
  const render_b = sg.buffer(vants_render);

  const render = await sg.render({
    shader: render_shader,
    data: [pheromones_b, render_b],
  });

  const compute = sg.compute({
    shader: compute_shader,
    data: [vants_b, pheromones_b, render_b],
    onframe() {
      render_b.clear();
    },
    dispatchCount: DISPATCH_COUNT,
    times: 25,
  });

  sg.run(compute, render);
}

initWebGPU().catch((err) => {
  showError(String(err));
  console.error(err);
});
