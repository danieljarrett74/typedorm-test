import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
	"input": "src/index.ts",
	"output": {
		"file": "dist/index.js",
		"format": "esm"
	},
	"external": [],
	"plugins": [
		commonjs(),
		nodeResolve(),
		json(),
	]
};