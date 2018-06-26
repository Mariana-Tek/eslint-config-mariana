module.exports = {
  env: {
      browser: true
  },
  extends: [
    'airbnb-base',
    'plugin:compat/recommended'
  ],
  parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module'
  },
  plugins: [
      'compat'
  ],
  rules: {
    'camelcase': [0, { 'properties': 'never' }], // we use underscore sometimes
    'import/no-unresolved': [0], // tbd
    'import/order': [0], // off due to use of sort-order
    'sort-imports': 'error', // currently all projects sorted using this
    'space-in-brackets': [0, 'never'], // seems excessive
    'space-in-parens': [0, 'never'], // javascript is a strange bedfellow

    // TODO: keep until all other fixes in place.
    'indent': [2, 4, { 'SwitchCase': 1 }],
    'max-len': [2, 120, 4, { 'ignoreComments': true, 'ignoreUrls': true }],
  }
};
