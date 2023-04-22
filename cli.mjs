#! /usr/bin/env node

import * as fs from 'fs';
import * as http from 'http';
import * as path from 'path';
import * as commander from 'commander';
import * as globby from 'globby';
import * as chokidar from 'chokidar';
import AgileCss from './dist/index.mjs';

const configDir = path.resolve(process.cwd(), 'agilecss.config.mjs');

(async () => {
  const defineConfig = await import(configDir).then(v => v.default);

  const {
    input: configInput,
    output: configOutput,
    customValue,
    plugins = [],
    ...config
  } = defineConfig();

  commander.program
    .option('-p, --port <number>', 'port to listen on', parseInt)
    .option('-w, --watch', 'watch for changes and reload')
    .parse(process.argv);

  const options = commander.program.opts();

  const PORT = options.port || 4321;
  const server = http.createServer();

  let started = false;

  const instance = new AgileCss();

  const input = configInput || './srcTest';

  instance.setConfig(config);

  function log(arr) {
    return console.log(
      ...arr.map(([text, color]) => `\x1b[${color}m${text}\x1b[0m`)
    );
  }

  if (customValue) {
    instance.customValue(customValue);
  }

  instance.on('success', css => {
    fs.writeFileSync(path.resolve(process.cwd(), configOutput), css);
    const timeoutId = setTimeout(() => {
      started = true;
      clearTimeout(timeoutId);
    }, 1000);
  });

  instance.on('valid', diagnostic => {
    if (started && options.watch) {
      const { message, className } = diagnostic;
      log([
        [`[${message}]`, 32],
        [`(class: ${className})`, 35],
      ]);
    }
  });

  instance.on('invalid', diagnostic => {
    const { message, className } = diagnostic;
    log([
      [`[${message}]`, 31],
      [`(class: ${className})`, 35],
    ]);
  });

  instance.plugins(plugins);

  function atomicFind(file) {
    fs.readFile(path.resolve(process.cwd(), file), 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      instance.find(data);
    });
  }

  function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
      atomicFind(files[i]);
    }
  }

  function initial() {
    if (typeof input === 'string') {
      const files = globby.globbySync(input);
      handleFiles(files);
    } else if (Array.isArray(input)) {
      for (let i = 0; i < input.length; i++) {
        const fileGlob = input[i];
        const files = globby.globbySync(fileGlob);

        handleFiles(files);
      }
    }
  }

  function watchFiles() {
    chokidar.watch(configInput).on('change', atomicFind);
  }

  if (options.watch) {
    server.listen(PORT, () => {
      initial();
      watchFiles();
      log([['\n🚀 AGILE CSS IS READY\n', 36]]);
    });
  } else {
    initial();
  }
})();
