module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    'plugin:vuejs-accessibility/recommended',
    // '@vue/typescript/recommended', 
    'eslint:recommended'
  ],

  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vuejs-accessibility/label-has-for': ['error', {
      required: {
        some: ['nesting', 'id']
      },
      allowChildren: false
    }]
  },
  

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],

  ignorePatterns: [
    'src/views/MentionsLegales.vue',
    'src/views/PolitiqueConfidentialite.vue',
  ],
};
