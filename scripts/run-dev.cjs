#!/usr/bin/env node
'use strict';
// Arranca Next.js con más memoria para evitar OOM (sobre todo en Windows)
const { spawn } = require('child_process');
const path = require('path');

const cwd = path.join(__dirname, '..');
const nextBin = path.join(cwd, 'node_modules', 'next', 'dist', 'bin', 'next');
const isWin = process.platform === 'win32';

// En Windows: cmd /c con set NODE_OPTIONS para que el proceso que ejecuta next reciba el límite de memoria
if (isWin) {
  const nodePath = process.execPath.replace(/"/g, '');
  const nextPath = nextBin.replace(/"/g, '');
  const cmd = `set NODE_OPTIONS=--max-old-space-size=8192&& ${nodePath} ${nextPath} dev`;
  const child = spawn('cmd', ['/c', cmd], { stdio: 'inherit', cwd, shell: false });
  child.on('exit', (code) => process.exit(code ?? 0));
} else {
  const child = spawn(
    process.execPath,
    ['--max-old-space-size=8192', nextBin, 'dev'],
    { stdio: 'inherit', env: { ...process.env, NODE_OPTIONS: '--max-old-space-size=8192' }, cwd }
  );
  child.on('exit', (code) => process.exit(code ?? 0));
}
