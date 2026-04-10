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
    size = window.innerWidth * window.innerHeight,
    state = new Float32Array(size * 2);

  const frag = await gulls.import("./frag.wgsl"),
    frag_shader = gulls.constants.vertex + frag,
    compute = await gulls.import("./compute.wgsl");

  for (let i = 0; i < size; i++) {
    //   state[i] = Math.random();
    // }
    state[i * 2 + 0] = 1.0;
    state[i * 2 + 1] = Math.random() < 0.01 ? 1.0 : 0.0;
  }

  const pane = new Pane();
  const style_1_mul = { feed: 0.0, kill: 0.0, d_a: 0.0, d_b: 0.0 };
  const style_base = { feed: 0.055, kill: 0.062, d_a: 1.0, d_b: 0.5 };
  const style_1_mul_uniforms = sg.uniform(Object.values(style_1_mul));
  const style_base_uniforms = sg.uniform(Object.values(style_base));

  const style_base_panel = pane.addFolder({ title: "Style Base" });
  const style_1_panel = pane.addFolder({ title: "Style 1" });

  style_base_panel
    .addBinding(style_base, "feed", {
      min: 0,
      max: 0.2,
      step: 0.001,
      label: "feed_base",
    })
    .on(
      "change",
      (v) => (style_base_uniforms.value = Object.values(style_base)),
    );
  style_base_panel
    .addBinding(style_base, "kill", {
      min: 0,
      max: 0.2,
      step: 0.001,
      label: "kill_base",
    })
    .on(
      "change",
      (v) => (style_base_uniforms.value = Object.values(style_base)),
    );
  style_base_panel
    .addBinding(style_base, "d_a", {
      min: 0,
      max: 1,
      step: 0.01,
      label: "d_a_base",
    })
    .on(
      "change",
      (v) => (style_base_uniforms.value = Object.values(style_base)),
    );
  style_base_panel
    .addBinding(style_base, "d_b", {
      min: 0,
      max: 1,
      step: 0.01,
      label: "d_b_base",
    })
    .on(
      "change",
      (v) => (style_base_uniforms.value = Object.values(style_base)),
    );
  style_1_panel
    .addBinding(style_1_mul, "feed", {
      min: -0.2,
      max: 0.2,
      step: 0.001,
      label: "feed",
    })
    .on(
      "change",
      (v) => (style_1_mul_uniforms.value = Object.values(style_1_mul)),
    );
  style_1_panel
    .addBinding(style_1_mul, "kill", {
      min: -0.2,
      max: 0.2,
      step: 0.001,
      label: "kill",
    })
    .on(
      "change",
      (v) => (style_1_mul_uniforms.value = Object.values(style_1_mul)),
    );
  style_1_panel
    .addBinding(style_1_mul, "d_a", {
      min: -1,
      max: 1,
      step: 0.01,
      label: "d_a",
    })
    .on(
      "change",
      (v) => (style_1_mul_uniforms.value = Object.values(style_1_mul)),
    );
  style_1_panel
    .addBinding(style_1_mul, "d_b", {
      min: -1,
      max: 1,
      step: 0.01,
      label: "d_b",
    })
    .on(
      "change",
      (v) => (style_1_mul_uniforms.value = Object.values(style_1_mul)),
    );

  const style_2_mul = { feed: 0.0, kill: 0.0, d_a: 0.0, d_b: 0.0 };
  const style_2_mul_uniforms = sg.uniform(Object.values(style_2_mul));

  const style_2_panel = pane.addFolder({ title: "Style 2" });

  style_2_panel
    .addBinding(style_2_mul, "feed", {
      min: -0.2,
      max: 0.2,
      step: 0.001,
      label: "feed",
    })
    .on(
      "change",
      (v) => (style_2_mul_uniforms.value = Object.values(style_2_mul)),
    );
  style_2_panel
    .addBinding(style_2_mul, "kill", {
      min: -0.2,
      max: 0.2,
      step: 0.001,
      label: "kill",
    })
    .on(
      "change",
      (v) => (style_2_mul_uniforms.value = Object.values(style_2_mul)),
    );
  style_2_panel
    .addBinding(style_2_mul, "d_a", {
      min: -1,
      max: 1,
      step: 0.01,
      label: "d_a",
    })
    .on(
      "change",
      (v) => (style_2_mul_uniforms.value = Object.values(style_2_mul)),
    );
  style_2_panel
    .addBinding(style_2_mul, "d_b", {
      min: -1,
      max: 1,
      step: 0.01,
      label: "d_b",
    })
    .on(
      "change",
      (v) => (style_2_mul_uniforms.value = Object.values(style_2_mul)),
    );

  const statebuffer1 = sg.buffer(state);
  const statebuffer2 = sg.buffer(state);
  const res = sg.uniform([window.innerWidth, window.innerHeight]);

  Mouse.init();

  const mouse = sg.uniform(Mouse.values);

  const render_pass = await sg.render({
    shader: frag_shader,
    data: [res, sg.pingpong(statebuffer1, statebuffer2)],
  });

  const compute_pass = sg.compute({
    shader: compute,
    data: [
      res,
      sg.pingpong(statebuffer1, statebuffer2),
      mouse,
      style_1_mul_uniforms,
      style_base_uniforms,
      style_2_mul_uniforms,
    ],
    onframe() {
      mouse.value = Mouse.values;
    },
    dispatchCount: [
      Math.round(gulls.width / 8),
      Math.round(gulls.height / 8),
      1,
    ],
    times: 5,
  });

  sg.run(compute_pass, render_pass);
}

initWebGPU().catch((err) => {
  showError(String(err));
  console.error(err);
});
