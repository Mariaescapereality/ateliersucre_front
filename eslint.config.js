/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
      browser: true,
      es2021: true,
  },
  extends: [
      'eslint:recommended',
      'plugin:react/recommended', // Add your specific config if using React
  ],
  parserOptions: {
      ecmaFeatures: {
          jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
  },
  rules: {
      'max-len': ['error', { code: 120 }] // Change 120 to your desired limit
  },
};
