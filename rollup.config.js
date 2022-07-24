import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
	"input": "dist/index.js",
	"output": {
		"file": "dist/bundle/index.js",
		"format": "esm"
	},
	"external": ["aws-sdk"],
	"plugins": [
		commonjs(
			{
				include: 'node_modules/**',
      ignoreGlobal: true
			}
		),
		nodeResolve({
			preferBuiltins: true
		}),
		json(),
	],
	onwarn: function (warning) {
		// Skip certain warnings

		// should intercept ... but doesn't in some rollup versions
		if (warning.code === 'THIS_IS_UNDEFINED') { return; }

		if (warning.code === 'CIRCULAR_DEPENDENCY') { return; }

		// console.warn everything else
		console.warn(warning.message);
	}
};