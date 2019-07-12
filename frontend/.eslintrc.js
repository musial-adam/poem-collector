module.exports = {
  globals: {
    __PATH_PREFIX__: true,
	},
	
	"env": {
		"browser": true,
	},
	"extends": [
		"airbnb",
		"prettier",
		"prettier/react"
	],
	"rules": {
    "react/jsx-filename-extension": 0,
    "react/react-in-jsx-scope": 0,
		"prettier/prettier": [
			"error",
			{
				"trailingComma": "es5",
				"singleQuote": true,
				"printWidth": 80,
				"useTabs": false,
			}
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
    
	},
	// "parser": "babel-eslint",
	"plugins": [
    "prettier",
    "react-hooks"
	]
}