module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "react"
    ],
    rules: {
        // indent: ["error", 2],
        'no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
          },
        ],
        semi: [ "error", "always" ],
        "react/self-closing-comp": "error",
        "react/no-danger": "error",
        "react/prop-types": "off",
        //"react/jsx-filename-extension": [ 1, { extensions: [ ".js", ".jsx" ] } ],
        "guard-for-in": 2
      }
}
