const easelint = require('easelint');

module.exports = easelint({
  javascript: true,
  typescript: true,
  jsxPragma: 'react',
  eslint: {
    root: true,
    overrides: [
      {
        // Files which require devDependencies
        //  config files, tests, etc...
        files: ['*.e2e-spec.ts', '*.spec.ts', 'vite.config.ts'],
        rules: {
          'import/no-extraneous-dependencies': 'off',
        },
      },
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
        // apps/hms-api | NestJS
        files: ['apps/hms-api/**/*.{js,jsx,ts,tsx}'],
        env: {
          node: true,
          jest: true,
        },
        rules: {
          '@typescript-eslint/interface-name-prefix': 'off',
          '@typescript-eslint/explicit-function-return-type': 'off',
          '@typescript-eslint/explicit-module-boundary-types': 'off',
          '@typescript-eslint/no-explicit-any': 'off',
          'class-methods-use-this': 'off',
          'import/no-cycle': 'off',
        },
      },
      {
        // apps/hms-www | React
        files: ['apps/hms-www/**/*.{js,jsx,ts,tsx}'],
        rules: {
          '@typescript-eslint/no-shadow': 'off',
          camelcase: 'off',
          'import/no-default-export': 'off',
          'react/react-in-jsx-scope': 'off',
          'react/require-default-props': 'off',
        },
      },
      {
        // apps/www | Next.js
        files: ['apps/www/**/*'],
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
          'import/no-default-export': 'off',
          'react/no-unescaped-entities': 'off',
          'react/react-in-jsx-scope': 'off',
          'react/require-default-props': 'off',
        },
      },
    ],
    ignorePatterns: ['**/dist/**/*.js'],
  },
});
