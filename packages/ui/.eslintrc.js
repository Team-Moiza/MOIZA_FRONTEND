/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: 'next/core-web-vitals',
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.lint.json',
    tsconfigRootDir: __dirname,
  },
};
