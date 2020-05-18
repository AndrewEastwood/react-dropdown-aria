/* eslint-disable no-undef */
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import packageJson from "./package.json";

const isProduction = process.env.NODE_ENV === 'production';

export default {
  input: "./index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: !isProduction
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: !isProduction
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    terser({
      sourcemap: !isProduction,
    }),
  ]
};