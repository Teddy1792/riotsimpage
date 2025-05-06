import { defineConfig } from "eslint";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { parserOptions } from "@typescript-eslint/parser";

export default defineConfig({
  // Set which files to lint
  files: ["**/*.{ts,tsx}"],

  // Extending recommended configurations for ESLint, React, and TypeScript
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],

  // Set environment
  env: {
    browser: true,
    es6: true,
    node: true,
  },

  // The parser to use for TypeScript
  parser: "@typescript-eslint/parser",

  // Enable ES6+ and TypeScript in the parser
  parserOptions: {
    ecmaVersion: 2020, // Enable ES6+ features
    sourceType: "module",
    project: "./tsconfig.json", // Optional, if using TypeScript config
  },

  // Define globals for the browser environment
  globals: globals.browser,

  plugins: ["react-hooks", "react-refresh"],

  // Rules for react and hooks
  rules: {
    ...reactHooks.configs.recommended.rules,
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/prop-types": "off", // Turn off prop-types checking (optional, if you use TypeScript)
  },
});
