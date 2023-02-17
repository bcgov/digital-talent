const easelint = require('easelint');

module.exports = easelint({
  javascript: true,
  typescript: true,
  jsxPragma: 'react',
  eslint: {
    root: true,
    overrides: [
      {
        files: ['apps/www/**/*.{js,jsx,ts,tsx}'],
        extends: ['plugin:@next/next/recommended'],
        settings: {
          'import/resolver': {
            typescript: {
              project: 'apps/www/tsconfig.json',
            },
          },
          next: {
            rootDir: 'apps/www',
          },
        },
        rules: {
          '@next/next/no-html-link-for-pages': ['error', 'apps/www/src/pages'],
          'import/no-default-export': 'off',
          'react/react-in-jsx-scope': 'off',
        },
      },
    ],
    ignorePatterns: ['**/dist/**/*.js'],
  },
});
