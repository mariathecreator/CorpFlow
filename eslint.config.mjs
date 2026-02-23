import js from "@eslint/js";
import tseslint from "typescript-eslint";
import path from "node:path";
import globals from "globals";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,
  {
    files: ["backend/**/*.ts"],
    languageOptions: {
      parserOptions: {
        project: path.resolve("./backend/tsconfig.json"),
        tsconfigRootDir: process.cwd()
      }
    }
  },

  prettierConfig,

  {
    ignores: ["**/dist", "**/node_modules"]
  }
];
