module.exports = {
    "extends": [
        "airbnb-base",
        "./.eslintrc.js"
    ],
    "plugins": [
        "ember"
    ],
    "rules": {
        // required for browser
        'compat/compat': [2],

        // required by Ember
        'camelcase': [0, { 'properties': 'never' }],
        'prefer-rest-params': 0,

        // eslint-plugin-ember rules
        'ember/local-modules': 'error',
        'ember/no-attrs-in-components': 'error',
        'ember/no-old-shims': 'error',
        'ember/order-in-components': 'error',
        'ember/order-in-controllers': 'error',
        'ember/order-in-routes': 'error',
        'ember/use-ember-get-and-set': 'error'
    }
};
