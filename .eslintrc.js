module.exports = {
  plugins: ['jsdoc', '@typescript-eslint', 'jest'],
  extends: ['eslint:recommended', 'eslint-config-prettier'],
  ignorePatterns: ['.eslintrc.js', 'babel.config.js', 'jest.config.js', 'lib/'],
  parser: '@typescript-eslint/parser',
  parserOptions: { sourceType: 'module' },
  rules: {
    indent: ['error', 2],
    semi: [2, 'always'],
    'no-console': ['error', { allow: ['warn', 'error', 'log'] }],
    'jsdoc/check-alignment': 1, // Recommended
    'jsdoc/check-param-names': 1, // Recommended
    'jsdoc/check-tag-names': 1, // Recommended
    'jsdoc/check-types': 1, // Recommended
    'jsdoc/implements-on-classes': 1, // Recommended
    'jsdoc/newline-after-description': 1, // Recommended
    'jsdoc/no-undefined-types': 1, // Recommended
    'jsdoc/require-description-complete-sentence': 1,
    'jsdoc/require-hyphen-before-param-description': 1,
    'jsdoc/require-jsdoc': 1, // Recommended
    'jsdoc/require-param': 1, // Recommended
    'jsdoc/require-param-description': 1, // Recommended
    'jsdoc/require-param-name': 1, // Recommended
    'jsdoc/require-param-type': 1, // Recommended
    'jsdoc/require-returns': 1, // Recommended
    'jsdoc/require-returns-check': 1, // Recommended
    'jsdoc/require-returns-description': 1, // Recommended
    'jsdoc/require-returns-type': 1, // Recommended
    'jsdoc/valid-types': 1, // Recommended
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/ban-ts-ignore': 'error',
    '@typescript-eslint/ban-types': 'error',
    camelcase: 'off',
    '@typescript-eslint/camelcase': 'error',
    '@typescript-eslint/class-name-casing': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/interface-name-prefix': 'error',
    '@typescript-eslint/member-delimiter-style': 'error',
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-this-alias': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'off',
  },
};
