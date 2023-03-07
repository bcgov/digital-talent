const easelint = require('easelint');

module.exports = easelint({
  javascript: true,
  typescript: true,
  jsxPragma: 'react',
  eslint: {
    root: true,
    overrides: [
      {
        // apps/api | Strapi
        files: ['apps/api/**/*.{js,jsx,ts,tsx}'],
        rules: {
          '@typescript-eslint/no-empty-function': 'warn',
          '@typescript-eslint/no-explicit-any': 'warn',
          'import/no-default-export': 'off',
          'no-console': 'warn',
        },
      },
      {
        // apps/www | Next.js
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
          'react/require-default-props': 'off',
        },
      },
    ],
    ignorePatterns: ['**/dist/**/*.js'],
  },
});
