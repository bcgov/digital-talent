const easelint = require('easelint');

module.exports = easelint({
  javascript: true,
  typescript: true,
  jsxPragma: 'react',
  eslint: {
    root: true,
    ignorePatterns: ['**/dist/**/*.js'],
  },
});
