module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'story-prefix-check'],
  rules: {
    'jsx-a11y/media-has-caption': [0],
    'no-new': [0],
    'react/button-has-type': [0],
    'import/prefer-default-export': [0],
    'react/function-component-definition': [0],
    'react/jsx-one-expression-per-line': [0],
    'react/no-unescaped-entities': [0],
    'import/no-extraneous-dependencies': [0],
    'react/jsx-props-no-spreading': [0],
    'object-curly-newline': [0],
    'react/prop-types': [0],
    'story-prefix-check/check-story-prefix': [1],
    // 0 - off
    // 1- Warn
    // 2- Error
  },
};
