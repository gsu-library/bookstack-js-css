#!/usr/bin/env node

import * as esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';

// CSS file index for bundle
const indexCSS = 'source/css/_index.css';

// Get target application/deployment from the arguments
const deployTier = process.argv[2] || 'unspecified';

// Verify valid application/deployment
if (!['dev', 'prod'].includes(deployTier)) {
  console.log(
    `\x1b[33mWarning:\x1b[0m Invalid deployTier "\x1b[31m${deployTier}\x1b[0m\n".
      \t Use: \x1b[1mnpm run build:css -- <dev|prod>\x1b[0m\n`,
  );
  process.exit(1);
}

// Set the destination for the CSS output
const deployDir = path.join('docs/', deployTier, '/css/');

function verifyDeployDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

/**
 * Build the formatted and minified CSS files
 */
async function buildCSS(deployDir) {
  try {
    verifyDeployDir(deployDir);

    const cssFormatted = path.join(deployDir, 'main.css');
    const cssMinified = path.join(deployDir, 'main.min.css');

    await Promise.all([
      // Formatted CSS
      esbuild.build({
        entryPoints: [indexCSS],
        bundle: true,
        outfile: cssFormatted,
        minify: false,
        write: true,
      }),
      // Minified CSS
      esbuild.build({
        entryPoints: [indexCSS],
        bundle: true,
        outfile: cssMinified,
        minify: true,
        write: true,
      }),
    ]);

    console.log(`\n\x1b[32m\t\u2713 CSS for ${deployTier} written to ${deployDir}\x1b[0m\n`);
  } catch (error) {
    console.error('\x1b[31mBuild failed\x1b[0m]', error);
    process.exit(1);
  }
}

buildCSS(deployDir);
