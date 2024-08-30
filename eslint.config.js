import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  {
    ignores: ['dist/**'], // Ignora la carpeta dist y todo su contenido
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
