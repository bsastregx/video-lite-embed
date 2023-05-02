/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import summary from 'rollup-plugin-summary';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import glob from 'glob';
import commonjs from '@rollup/plugin-commonjs';

const inputFiles = glob.sync('./_rollup-test/components/*.js');

export default {
  input: inputFiles,
  output: {
    //file: 'a-single-file.bundled.js',
    dir: '_rollup-test-bundled',
    format: 'esm',
  },
  onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    replace({'Reflect.decorate': 'undefined', preventAssignment: true}),
    resolve({
      moduleDirectories: ['node_modules', './_rollup-test'],
    }),
    terser({
      ecma: 2017,
      module: true,
      //warnings: true, --> 'warnings' does not exist in type 'Options'.
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
    summary(),
    commonjs(),
  ],
};
