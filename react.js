module.exports = {
    'extends': [
        'airbnb',
        'plugin:react/recommended',
        './.eslintrc-base.js',
    ],
    "env": {
        "browser": true
    },
    'globals': {
        'window': true,
        'React': true,
    },
    'parser': 'babel-eslint',
    'plugins': [
        'jsx-a11y',
        'react',
    ],
    'rules': {
        'jsx-a11y/anchor-is-valid': 0,
        'react/jsx-filename-extension': 0,
        'react/jsx-indent': [
            'error',
            4
        ],
        'react/jsx-indent-props': [
            'error',
            4
        ],
    },
};
