import * as esbuild from 'esbuild';

const entryPoint = 'docs/css/00-index.css';

async function build() {
  try {
    await Promise.all([
      // Non-minified version
      esbuild.build({
        entryPoints: [entryPoint],
        bundle: true,
        outfile: 'docs/css/main.css',
      }),
      // Minified version
      esbuild.build({
        entryPoints: [entryPoint],
        bundle: true,
        minify: true,
        outfile: 'docs/css/main.min.css',
      }),
    ]);
    console.log('Build complete: expanded and minified files generated.');
  } catch (error) {
    console.error('Build failed');
    process.exit(1);
  }
}

build();
