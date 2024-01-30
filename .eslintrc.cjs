module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
    // Make sure it's always the last config, so it gets the chance to override other configs.
    'eslint-config-prettier',
  ],
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use.
      version: 'detect',
    },
    // Tells eslint how to resolve imports
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', 'simple-import-sort', 'unused-imports', '@stylexjs', 'testing-library'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@stylexjs/valid-styles': ['error'],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/no-meaningless-void-operator': 'off',
    '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreVoidOperator: true }],
  },
  overrides: [
    {
      files: ['src/**/?(*.)+(spec|test).ts?(x)', 'src/tests/**'],
      extends: ['plugin:testing-library/react'],
      rules: {
        'testing-library/prefer-user-event': 'error',
        'testing-library/prefer-explicit-assert': 'error',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};
