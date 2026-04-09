import * as esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';

const cssIndex = 'docs/source/css/00-index.css';

const mode = process.argv[2] || 'dev';

if (!['dev', 'prod'].includes(mode)) {
  console.error('You must specify :dev or :prod');
  process.exit(1);
}

const outDir = path.join('docs/', mode);

function verifyDirectory(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

async function buildCSS(targetDir) {
  try {
    verifyDirectory(targetDir);

    const cssExpanded = path.join(targetDir, 'main.css');
    const cssMinified = path.join(targetDir, 'main.min.css');

    await Promise.all([
      // Non-minified version
      esbuild.build({
        entryPoints: [cssIndex],
        bundle: true,
        outfile: cssExpanded,
        minify: false,
        write: true,
      }),
      // Minified version
      esbuild.build({
        entryPoints: [cssIndex],
        bundle: true,
        outfile: cssMinified,
        minify: true,
        write: true,
      }),
    ]);

    console.log(`CSS for ${mode} written to ${targetDir}`);
  } catch (error) {
    console.error('Build failed', error);
    process.exit(1);
  }
}

buildCSS(outDir);
