import { default as gulls } from "./gulls/gulls.js";
import { default as Video } from "./gulls/helpers/video.js";

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
  const shader = `${gulls.constants.vertex}

// the sampler / texture for live video appear
// after all uniforms, storage buffers, and the
// sampler / texture for feedback.
@group(0) @binding(0) var<uniform> resolution: vec2f;
@group(0) @binding(1) var backSampler:    sampler;
@group(0) @binding(2) var backBuffer:     texture_2d<f32>;
@group(0) @binding(3) var videoSampler:   sampler;

// NOTE THAT THERE IS A DIFFERENT GROUP NUMBER FOR THE
// VIDEO TEXTURE BELOW. This lets gulls easily rebind
// the texture for each frame, without having to rebind
// the other variables in group 0. Given the new group,
// the binding index resets to 0.

@group(1) @binding(0) var videoBuffer:    texture_external;

@fragment 
fn fs( @builtin(position) pos : vec4f ) -> @location(0) vec4f {
  let p = pos.xy / resolution;

  // WebGPU requires us to use a different function to sample
  // from live video / video files
  let video = textureSampleBaseClampToEdge( videoBuffer, videoSampler, p );

  // read the previous frame of video
  let fb = textureSample( backBuffer, backSampler, p );

  // combine the circle and the feedback
  let out = video * .05 + fb * .975;

  return vec4f( out.rgb, 1. );
}`;

  const sg = await gulls.init();

  await Video.init();

  const back = new Float32Array(gulls.width * gulls.height * 4);
  const feedback_t = sg.texture(back);

  const render = await sg.render({
    shader,
    data: [
      sg.uniform([sg.width, sg.height]),
      sg.sampler(),
      feedback_t,
      sg.video(Video.element),
    ],
    copy: feedback_t,
  });

  sg.run(render);
}

initWebGPU().catch((err) => {
  showError(String(err));
  console.error(err);
});
