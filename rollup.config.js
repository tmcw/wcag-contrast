// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'index.mjs',
  output: {
    file: 'index.js',
    format: 'umd'
  },
  name: 'wcagContrast',
  plugins: [
    resolve({
      module: true,
      main: true
    }),
    commonjs({})
  ]
};
