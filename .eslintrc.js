module.exports = {
  extends: ['airbnb-base'],
  plugins: ['prettier', 'simple-import-sort', 'unused-imports'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto', printWidth: 100 }],
    'import/extensions': 0,
    'comma-dangle': 'off',
    'no-restricted-exports': ['error', { restrictedNamedExports: [] }],
    'linebreak-style': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-unused-vars': 'warn',
    'no-shadow': 'off',
    'object-curly-newline': 'off',
    'import/prefer-default-export': 0,
    'no-use-before-define': 0,
    indent: 'off',
    'function-paren-newline': 0,
    'lines-between-class-members': 0,
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [
            // eslint-disable-next-line global-require
            `^(${require('module').builtinModules.join('|')})(/|$)`,
            '^@?\\w',
            '^test-utils(/.*|$)',
          ],
          ['^config(/.*|$)'],
          ['^interfaces(/.*|$)'],
          ['^models(/.*|$)'],
          ['^dtos(/.*|$)'],
          ['^services(/.*|$)'],
          ['^mappers(/.*|$)'],
          ['^routes(/.*|$)'],
          ['^utils(/.*|$)', '^hooks(/.*|$)', '^shared(/.*|$)'],
          // Imports starting with ``
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Imports starting with `./`
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Models import
          ['^.+\\.interface(.*|$)'],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
        moduleDirectory: ['.', 'node_modules'],
      },
    },
  },
};
