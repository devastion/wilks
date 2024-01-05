import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";

import pkg from "./package.json" with { type: "json" };

export default [
  {
    input: "src/main.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
      },
      {
        file: pkg.module,
        format: "es",
      },
      {
        file: pkg.browser,
        format: "umd",
        name: "RollupTsLibTemplate",
      },
    ],
    plugins: [resolve(), commonjs(), typescript({ tsconfig: "tsconfig.json" })],
  },
  {
    input: "./dist/dts/main.d.ts",
    output: [
      {
        file: "dist/wilks.d.ts",
        format: "es",
      },
    ],
    plugins: [dts()],
  },
];
