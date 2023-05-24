module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		"plugin:react/recommended",
		"airbnb",
		"plugin:i18next/recommended",
		"eslint:recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
		"plugin:import/recommended",
		"airbnb/hooks",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint", "i18next", "react-hooks"],
	rules: {
		quotes: ["error", "double"],
		"arrow-body-style": [0, "as-needed"],
		"react/jsx-indent": [0, "tab"],
		"react/jsx-indent-props": [0, "tab"],
		"react/no-array-index-key": "off",
		indent: [0, "tab"],
        "no-tabs": 0,
		"react/jsx-filename-extension": [
			2,
			{
				extensions: [".js", ".jsx", ".tsx"],
			},
		],
		"import/no-unresolved": "off",
		"import/prefer-default-export": "off",
		"no-unused-vars": "warn",
		"react/require-default-props": "off",
		"react/react-in-jsx-scope": "off",
		"jsx-a11y/no-autofocus": "off",
		"react/jsx-props-no-spreading": "warn",
		"react/function-component-definition": [
			"error",
			{
				namedComponents: ["function-declaration", "arrow-function"],
				unnamedComponents: "arrow-function",
			},
		],
		"no-shadow": "off",
		"import/extensions": "off",
		"jsx-a11y/label-has-associated-control": "off",
		"import/no-extraneous-dependencies": "off",
		"no-underscore-dangle": "off",
		"react/button-has-type": "off",
		"no-return-await": "off",
		"i18next/no-literal-string": [
			"error",
			{
				markupOnly: true,
				ignoreAttribute: ["as", "role", "data-testid", "to", "target", "justify", "align", "direction", "gap"],
			},
		],
		"max-len": [
			"error",
			{
				ignoreComments: true,
				ignoreStrings: true,
				code: 120,
			},
		],
		"jsx-a11y/no-static-element-interactions": "off",
		"jsx-a11y/click-events-have-key-events": "off",
		"react-hooks/rules-of-hooks": "error",
		"no-plusplus": "off",
		"react-hooks/exhaustive-deps": "error",
		"no-param-reassign": "off",
		"no-undef": "off",
		camelcase: "off",
	},
	globals: {
		__IS_DEV__: true,
		__API__: true,
		__PROJECT__: true,
	},
	overrides: [
		{
			files: ["**/src/**/*.{test,stories}.{ts,tsx}"],
			rules: {
				"i18next/no-literal-string": "off",
				"max-len": "off",
			},
		},
	],
};
