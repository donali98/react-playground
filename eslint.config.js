import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import googleConfig from 'eslint-config-google';
import prettier from 'eslint-plugin-prettier';

const googleRules = googleConfig.rules;

const plugins = {
  react: pluginReact,
  prettier: prettier,
};

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: {...globals.browser, ...globals.node},
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    ignores: ['dist/**', 'eslint.config.js', 'prettier.config.cjs'],
    plugins,
    rules: {
      ...googleRules,
      'prettier/prettier': ['error'],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',
      'object-curly-spacing': ['error', 'never'], //esta regla debe estar alineada con Prettier
      'prettier/prettier': ['error'], // Habilita Prettier como una regla de ESLint
      indent: ['error', 2], // Asegúrate de que esto esté en 2 espacios
      'valid-jsdoc': 'off',
      'require-jsdoc': 'off',
    },
  },
];
