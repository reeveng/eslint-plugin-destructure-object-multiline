"use strict";

module.exports = {
	root: true,
	extends: [
		"eslint:recommended",
		"plugin:eslint-plugin/recommended",
		"plugin:node/recommended",
	],
	env: {
		node: true,
	},
	parser: "babel-eslint",
	parserOptions: {
		ecmaVersion: 6,
		sourceType: "module",
		ecmaFeatures: {
			modules: true,
		},
	},
	overrides: [
		{
			files: ["tests/**/*.js"],
			env: { mocha: true },
		},
	],
};
