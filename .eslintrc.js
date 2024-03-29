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
        // All Javascript, React, TypeScript files
        files: ['*.{js,jsx,ts,tsx}'],
        rules: {
          '@typescript-eslint/no-explicit-any': 'off',
          '@typescript-eslint/no-shadow': 'off',
          camelcase: 'off',
          'import/no-cycle': 'off',
          'import/no-default-export': 'off',
          'class-methods-use-this': 'off',
          'no-restricted-syntax': 'off',
          'no-continue': 'off',
        },
      },
      {
        // api | Nest.js
        files: ['apps/api/**/*.{js,jsx,ts,tsx}'],
        settings: {
          'import/resolver': {
            typescript: {
              project: 'apps/api/tsconfig.json',
            },
          },
        },
        rules: {
          '@typescript-eslint/interface-name-prefix': 'off',
          '@typescript-eslint/explicit-function-return-type': 'off',
          '@typescript-eslint/explicit-module-boundary-types': 'off',
          '@typescript-eslint/no-explicit-any': 'off',
          'class-methods-use-this': 'off',
        },
      },
      {
        // apps/hms-app | React
        files: ['apps/hms-app/**/*.{js,jsx,ts,tsx}'],
        extends: ['plugin:react-hooks/recommended'],
        plugins: ['react-refresh'],
        rules: {
          '@typescript-eslint/no-shadow': 'off',
          'import/no-default-export': 'off',
          'react/react-in-jsx-scope': 'off',
          'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
          'react/require-default-props': 'off',
        },
      },
      {
        // www | Next.js
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
          'react/no-unescaped-entities': 'off',
          'react/react-in-jsx-scope': 'off',
          'react/require-default-props': 'off',
        },
      },
    ],
    ignorePatterns: ['**/dist/**/*.js'],
  },
});
