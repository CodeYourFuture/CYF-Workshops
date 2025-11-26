import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    bail: 1,
    typecheck: {
      enabled: true,
      include: ["src/tests/exercise2.test.ts", "src/exercise2.ts"], // Exercise 2 is the only exercise utilising vitest typechecking. This ensures other files aren't unexpectedly checked
      tsconfig: "tsconfig.exercise2.json",
    },
  },
});
