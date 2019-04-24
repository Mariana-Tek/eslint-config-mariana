module.exports = {
    "extends": [
        "airbnb",
        "plugin:react/recommended",
        "./.eslintrc.js",
    ],
    "globals": {
        "window": true,
        "React": true,
    },
    "parser": "babel-eslint",
    "plugins": [
        "react"
    ],
    "rules": {
        "jsx-a11y/anchor-is-valid": 0,
        "react/jsx-filename-extension": 0,
    }
};