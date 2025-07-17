import eslint from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import sonarjs from "eslint-plugin-sonarjs";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked, stylistic.configs.customize({
    arrowParens: true,
    indent: 2,
    quotes: "double",
    semi: true,
    jsx: false,
  }),
  importPlugin.flatConfigs.recommended,
  sonarjs.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: [
            "eslint.config.js",
            "lint-staged.config.ts",
          ],
          defaultProject: "tsconfig.json",
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "import/order": [
        "error",
        {
          "newlines-between": "always",
          "groups": [
            ["builtin"],
            ["external"],
            ["internal"],
            ["parent", "sibling", "index", "unknown"],
            ["type"],
          ],
          "pathGroups": [
            { pattern: "@*/**", patternOptions: {}, group: "external", position: "after" },
          ],
          "pathGroupsExcludedImportTypes": ["builtin", "external"],
          "distinctGroup": true,
          "alphabetize": { order: "asc", caseInsensitive: true, orderImportKind: "asc" },
        },
      ],
      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
      "import/no-cycle": "error",
    },
    settings: {
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    extends: [importPlugin.flatConfigs.recommended, importPlugin.flatConfigs.typescript],
    rules: {
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    },
  },
  {
    ignores: [
      "node_modules",
      "dist",
    ],
  },
  {
    files: ["**/*.test.*", "**/__tests__/**"],
    extends: [tseslint.configs.disableTypeChecked],
  },
);
