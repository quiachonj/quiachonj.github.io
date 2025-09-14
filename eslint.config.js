// eslint.config.js
import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
	// Base JS rules
	js.configs.recommended,

	// Astro files
	{
		files: ['**/*.astro'],
		plugins: { astro },
		languageOptions: {
			parser: astro.parser
		},
		rules: {
			'astro/no-unused-css-selector': 'warn'
		}
	},

	// TypeScript files
	{
		files: ['**/*.ts', '**/*.tsx'],
		plugins: { '@typescript-eslint': ts },
		languageOptions: {
			parser: tsParser
		},
		settings: {
			// ✅ parserOptions must go here in flat config
			parserOptions: {
				project: './tsconfig.json'
			}
		},
		rules: {
			'@typescript-eslint/no-unused-vars': 'warn',
			'@typescript-eslint/explicit-function-return-type': 'off'
		}
	}
];
