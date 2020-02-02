# rollup-plugin-watch-assets
Dead-simple plugin to add assets like HTML and CSS to rollup's file watcher.

Useful if you use a copy plugin to copy over assets when building.

Pass an array of filenames or globs to the `assets` option to tell the plugin which files to watch. They will be expanded and resolved, then watched.

```js
import watchAssets from 'rollup-plugin-watch-assets';

export default {
  input: 'src/index.js',
  output: {
    dir: 'build',
    format: 'es'
  },
  plugins: [
    watchAssets({ assets: ['src/index.html', 'src/styles/*.css'] })
  ]
}
```
