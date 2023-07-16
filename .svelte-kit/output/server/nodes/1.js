

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.4c981423.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/index.153435c3.js","_app/immutable/chunks/singletons.142989ae.js","_app/immutable/chunks/paths.f58d73ed.js"];
export const stylesheets = [];
export const fonts = [];
