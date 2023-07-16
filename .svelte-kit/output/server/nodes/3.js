import * as server from '../entries/pages/comic/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/comic/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/comic/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.74c2baf1.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/index.153435c3.js","_app/immutable/chunks/paths.f58d73ed.js"];
export const stylesheets = [];
export const fonts = [];
