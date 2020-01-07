import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import pkg from './package.json';

export default [
	{
		input: 'src/index.js',
		output: {
				name: 'LinkedList',
				file: pkg.browser,
				format: 'umd'
		},
		plugins: [
			resolve(),
			commonjs(),
      babel({
				exclude: ['node_modules/**']
			}),
			terser()
    ]
	},

	{
		input: 'src/index.js',
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'esm' }
		]
	}
];
