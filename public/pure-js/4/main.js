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

const print = console.log;

async function initWebGPU() {
  const sg = await gulls.init(),
    size = window.innerWidth * window.innerHeight
  const NUM_PARTICLES = 1024*16,
        NUM_PROPERTIES = 3, 
        state = new Float32Array( NUM_PARTICLES * NUM_PROPERTIES )

  for( let i = 0; i < NUM_PARTICLES * NUM_PROPERTIES; i+= NUM_PROPERTIES ) {
    state[ i ] = (Math.random() - 0.5) * 2;
    state[i + 1] = (Math.random() - 0.5) * 2;
    state[i + 2] = 20 + Math.random() * 10;
  }

  const frag_shader = await gulls.import("./frag.wgsl"),
    compute = await gulls.import("./compute.wgsl"),
    splat = gulls.constants.vertex + await gulls.import("./splat.wgsl");

  const state_b = sg.buffer( state ),
        frame_u = sg.uniform( 0 ),
        res_u   = sg.uniform([ sg.width, sg.height ]) 

  const back = new Float32Array( gulls.width * gulls.height * 4 );
  const feedback_t = sg.texture( back );
  
//   Mouse.init();
// 
//   const mouse = sg.uniform(Mouse.values);

  const splat_pass = await sg.render({
  	shader: splat,
  	data: [sg.sampler(), feedback_t, res_u],
  });

  const render_pass = await sg.render({
    shader: frag_shader,
    data: [frame_u, res_u, state_b],
    onframe() {frame_u.value++},
    copy: feedback_t,
    count: NUM_PARTICLES,
    blend: true,
  });

  const dc = Math.ceil( NUM_PARTICLES / 64 );

  const compute_pass = sg.compute({
    shader: compute,
    data: [
      res_u,
      state_b
    ],
    dispatchCount: [
      dc,
      dc,
      1,
    ],
    times: 1,
  });

  sg.run(compute_pass, render_pass, splat_pass);
}

initWebGPU().catch((err) => {
  showError(String(err));
  console.error(err);
});
