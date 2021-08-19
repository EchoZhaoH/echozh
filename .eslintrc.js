module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    "react-hooks"
  ],
  extends: [
    "eslint:recommended",
    'plugin:@typescript-eslint/recommended',
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'jsx-quotes': ["error", "prefer-double"],
    'react/prop-types': 0
  },
  env: {
    browser: true,
    node: true
  }
};
