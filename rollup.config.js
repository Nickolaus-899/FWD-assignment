import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from "@rollup/plugin-typescript";
import moment from "@rollup/plugin-commonjs";

export default {
    input: 'src/joke.ts',
    output: { file: 'dist/bundle.js' },
    plugins: [moment(), typescript(), nodeResolve({ browser: true }), terser()],
};