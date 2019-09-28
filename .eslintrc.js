module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['plugin:prettier/recommended', 'react-app'],
  plugins: ['prettier'],
  rules: {
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], 'parent', 'sibling', 'index'],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
  },
}
