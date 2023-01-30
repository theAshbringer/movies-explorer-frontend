module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': ['off', { devDependencies: false, optionalDependencies: false, peerDependencies: false }],
    'react/jsx-props-no-spreading': 'warn',
    'no-unused-vars': 'warn',
  },
};
