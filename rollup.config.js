import postcss from 'rollup-plugin-postcss';

export default {
  // Your existing Rollup configuration options...
  plugins: [
    // Your existing plugins...
    postcss({
      extract: true,
      minimize: true,
      sourceMap: true,
    }),
  ],
};
