module.exports = {
  extends: [
    'mariana',
    'plugin:ember/recommended'
  ],
  globals: {
    c3: true,
    server: true
  },
  plugins: [
    'ember'
  ],
  rules: {
    // eslint-config-ember
    // https://github.com/jonathanKingston/eslint-config-ember
    'no-underscore-dangle': 0,
    'prefer-rest-params': 0,
    'prefer-template': 0,

    // eslint-plugin-ember rules
    // https://github.com/ember-cli/eslint-plugin-ember
    'ember/order-in-components': 'error',
    'ember/order-in-controllers': 'error',
    'ember/order-in-models': 'error',
    'ember/order-in-routes': 'error',
    'ember/use-ember-get-and-set': 'error'
  }
}
