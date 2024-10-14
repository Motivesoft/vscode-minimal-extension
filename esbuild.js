const esbuild = require('esbuild');

const baseConfig = {
  bundle: true,
  minify: process.env.NODE_ENV === 'production',
  sourcemap: process.env.NODE_ENV !== 'production',
  format: 'cjs',
  platform: 'node',
  external: ['vscode'],
};

const desktopConfig = {
  ...baseConfig,
  entryPoints: ['./src/extension.ts'],
  outfile: './dist/extension.js',
};

const webConfig = {
  ...baseConfig,
  entryPoints: ['./src/web/extension.ts'],
  outfile: './dist/web/extension.js',
  platform: 'browser',
  target: 'es2020',
};

Promise.all([
  esbuild.build(desktopConfig),
  esbuild.build(webConfig),
])
  .catch(() => process.exit(1));