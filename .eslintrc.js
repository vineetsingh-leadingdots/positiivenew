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
        // ... any rules you want
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'no-unused-expressions': [
            'error',
            {
              allowShortCircuit: true,
              allowTernary: true,
              allowTaggedTemplates: true,
            },
          ],
          "react/self-closing-comp": "error",
          "react/no-danger": "error",
          "react/prop-types": "off",
          "react/jsx-filename-extension": [ 1, { extensions: [ ".js", ".jsx" ] } ],
          // "brace-style": [2, "allman", { allowSingleLine: true }],
          "constructor-super": 2,
          "guard-for-in": 2,
          "react-hooks/exhaustive-deps": "off"
       },
}
