import { defineConfig } from 'eslint/config';
import cypress from 'eslint-plugin-cypress';
import chaiFriendly from 'eslint-plugin-chai-friendly';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  {
    extends: compat.extends(
      'plugin:cypress/recommended',
      'plugin:chai-friendly/recommended',
      'plugin:prettier/recommended'
    ),

    plugins: {
      cypress,
      'chai-friendly': chaiFriendly,
    },

    rules: {
      'prettier/prettier': 0,
      semi: ['error', 'always'],
      'no-multi-spaces': 'error',
      'no-multiple-empty-lines': 'error',
      'no-unused-vars': 'error',
      'no-use-before-define': 'error',
      'cypress/no-assigning-return-values': 'error',
      'cypress/no-unnecessary-waiting': 0,
      'cypress/assertion-before-screenshot': 'warn',
      'cypress/no-force': 'warn',
      'cypress/no-async-tests': 'error',
      'cypress/unsafe-to-chain-command': 'off',
      'no-unused-expressions': 'off',
      'chai-friendly/no-unused-expressions': 2,
    },
    ignores: ['eslint.config.mjs'],
  },
]);
