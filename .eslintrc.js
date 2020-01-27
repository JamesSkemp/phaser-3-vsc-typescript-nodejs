module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		"indent": ["warn", "tab"],
		"no-console": ["warn"],
		"no-multiple-empty-lines": ["warn", { "max": 1 }]
	},
	env: {
		"browser": true,
		"commonjs": true,
		"es2017": true
	}
};
