import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["react", "typescript", "oxc"],
  rules: {
    "func-style": ["error", "expression"],
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { allowConstantExport: true }],
  },
});
