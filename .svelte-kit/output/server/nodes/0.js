import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.44a644ca.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/index.153435c3.js","_app/immutable/chunks/paths.f58d73ed.js"];
export const stylesheets = ["_app/immutable/assets/0.aaba04d1.css"];
export const fonts = [];
