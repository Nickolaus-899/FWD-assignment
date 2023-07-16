export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "FWD/_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.ea5241af.js","app":"_app/immutable/entry/app.6d058777.js","imports":["_app/immutable/entry/start.ea5241af.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/singletons.142989ae.js","_app/immutable/chunks/paths.f58d73ed.js","_app/immutable/entry/app.6d058777.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/index.153435c3.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
