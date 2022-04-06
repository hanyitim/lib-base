import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy';
import path from 'path';
import pkg from './package.json';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
const formatList = [
  {
    format: 'es',
    file: path.resolve(__dirname, './lib/index.esm.js'),
    sourcemap: true
  },
  {
    format: 'umd',
    name: pkg.moduleName,
    file: path.resolve(__dirname, './lib/index.umd.js'),
    sourcemap: true
  },
  {
    format: 'cjs',
    file: path.resolve(__dirname, './lib/index.js'),
    sourcemap: true
  },
  {
    format: 'amd',
    file: path.resolve(__dirname, './lib/index.amd.js'),
    sourcemap: true
  },
  {
    format: 'iife',
    name: pkg.moduleName,
    file: path.resolve(__dirname, './lib/index.browser.js'),
    sourcemap: true
  },
];
const config = [
  {
    input: path.resolve(__dirname, './src/index.ts'),
    output: formatList,
    plugins: [
      resolve(),
      copy({
        targets: [
          { src: path.resolve(__dirname, './types/*'), dest: path.resolve(__dirname, 'lib/types') }
        ]
      }),
      typescript({ useTsconfigDeclarationDir: true, tsconfig: path.resolve(__dirname, './tsconfig.json'), }),
      commonjs(),
      livereload(),
      serve({
        open: true,
        port: 8082,
        contentBase: ''
      })
    ]
  }
];
export default config;