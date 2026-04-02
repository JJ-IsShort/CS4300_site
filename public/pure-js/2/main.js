import { default as gulls } from "./gulls/gulls.js";
import { default as Video } from "./gulls/helpers/video.js";
import { default as Mouse } from "./gulls/helpers/mouse.js";
import { Pane } from "https://cdn.jsdelivr.net/npm/tweakpane@4.0.5/dist/tweakpane.min.js";

const canvas = document.getElementById("gpu-canvas");
const errorOverlay = document.getElementById("error-overlay");
const errorMessage = document.getElementById("error-message");

function showError(msg) {
  // I love how this error thing looks and the funny thing is that
  // ideally no one will ever see it.
  errorMessage.textContent = msg;
  errorOverlay.classList.add("visible");
}

// async function initWebGPU() {
//   // Check WebGPU support
//   if (!navigator.gpu) {
//     showError(
//       "WebGPU is not supported in this browser. WebGPU is quirky so I don't know what will fix it. Try checking your flags.",
//     );
//     return;
//   }
//
//   // Request adapter. Never had to deal with this being async before. In zig we have a sync version
//   const adapter = await navigator.gpu.requestAdapter();
//   if (!adapter) {
//     showError("No WebGPU adapter found.");
//     return;
//   }
//
//   const device = await adapter.requestDevice();
//
//   device.lost.then((info) => {
//     showError(`WebGPU device was lost: ${info.message}`);
//   });
//
//   const context = canvas.getContext("webgpu");
//   const format = navigator.gpu.getPreferredCanvasFormat();
//
//   function resize() {
//     const dpr = window.devicePixelRatio || 1;
//     canvas.width = Math.floor(window.innerWidth * dpr);
//     canvas.height = Math.floor(window.innerHeight * dpr);
//     context.configure({
//       device,
//       format,
//       alphaMode: "opaque",
//     });
//   }
//
//   window.addEventListener("resize", resize);
//   resize();
//
//   function frame() {
//     const commandEncoder = device.createCommandEncoder();
//
//     const renderPass = commandEncoder.beginRenderPass({
//       colorAttachments: [
//         {
//           view: context.getCurrentTexture().createView(),
//           clearValue: { r: 0.05, g: 0.05, b: 0.05, a: 1.0 },
//           loadOp: "clear",
//           storeOp: "store",
//         },
//       ],
//     });
//
//     renderPass.end();
//     device.queue.submit([commandEncoder.finish()]);
//     requestAnimationFrame(frame);
//   }
//
//   requestAnimationFrame(frame);
// }

// Lol forgot about gulls for a second there
async function initWebGPU() {
  const frag = await gulls.import("./frag.wgsl"),
    shader = gulls.constants.vertex + frag;

  const sg = await gulls.init();

  await Video.init();

  const back = new Float32Array(gulls.width * gulls.height * 4);
  const feedback_t = sg.texture(back);

  Mouse.init();

  const mouse = sg.uniform(Mouse.values);

  const pane = new Pane();
  const k_height = sg.uniform(1.9);
  const k_pow = sg.uniform(1.9);
  const r_sharpness = { val: { x: 2, y: 2, z: 2 } }
  const r_sharpness_u = sg.uniform(Object.values(r_sharpness.val))

  pane.addBinding(k_height, 'value', { min: 0, max: 4, label: 'k_height' })
  pane.addBinding(k_pow, 'value', { min: 0.1, max: 6, label: 'k_pow' })
  pane
    .addBinding(r_sharpness, 'val', { label: 'r_sharpness' })
    .on('change', v => r_sharpness_u.value = Object.values(r_sharpness.val))

  const render = await sg.render({
    shader,
    data: [
      sg.uniform([sg.width, sg.height]),
      sg.sampler(),
      feedback_t,
      mouse,
      k_height,
      k_pow,
      r_sharpness_u,
      sg.video(Video.element),
    ],
    copy: feedback_t,
    onframe() {
      mouse.value = Mouse.values;
    },
  });

  sg.run(render);
}

initWebGPU().catch((err) => {
  showError(String(err));
  console.error(err);
});
