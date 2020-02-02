const unary = f => x => f(x);
const path = require('path');
const resolve = unary(path.resolve);
const globby = require('globby');
export default function watchAssets({ assets }) {
  return {
    name: 'watch-assets',
    async load() {
      const watch = assetPath => this.addWatchFile(assetPath);
      (await globby(assets))
        .map(resolve)
        .forEach(watch);
    },
  };
}
