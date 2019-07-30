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
    "no-underscore-dangle": 0,
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
    "react-hooks/exhaustive-deps": "warn",
    // Experimental rule for Next.js Link API
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "hrefLeft", "hrefRight" ],
      "aspects": [ "invalidHref", "preferButton" ]
    }],
    
	},
	// "parser": "babel-eslint",
	"plugins": [
    "prettier",
    "react-hooks"
	]
}