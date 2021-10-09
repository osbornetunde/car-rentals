module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:import/warnings',
    'plugin:import/errors',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'prettier',
    'import',
    'jsx-a11y',
    '@typescript-eslint',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'import/extensions': 'off',
    'react/jsx-props-no-spreading': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'jest.setup.ts',
          '**/*.test.tsx',
          '**/.spec.tsx',
          '**/.test.ts',
          '**/.spec.ts',
        ],
      },
    ],
  },
};
