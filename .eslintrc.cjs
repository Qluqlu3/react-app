module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-refresh', '@typescript-eslint', 'react-hooks'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'no-unused-vars': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'tailwindcss/classnames-order': 'warn',
  },
}
