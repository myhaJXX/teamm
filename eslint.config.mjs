import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    ignores: ['build', 'node_modules', '*.config.js', '**/*.d.ts', '.next']
  },
  {
    "settings": {
      "react": {
        "version": "detect"
      }
    }
  },
  {rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "args": "all",
        "argsIgnorePattern": "^_",
        "caughtErrors": "all",
        "caughtErrorsIgnorePattern": "^_",
        "destructuredArrayIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "ignoreRestSiblings": true
      }
    ],
    "@typescript-eslint/no-require-imports": "off",
    "eqeqeq": ["error", "always"],
    "curly": ["error", "all"],
    "react/react-in-jsx-scope": "off"
  }},
];