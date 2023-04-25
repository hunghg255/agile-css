import path from 'node:path';
import jiti from 'jiti';
import * as commander from 'commander';
import http from 'http';
import fs from 'node:fs';
import AgileCss from 'agile-css';
import * as globby from 'globby';
import * as chokidar from 'chokidar';

function tryRequire(id: string, rootDir: string = process.cwd()) {
  const _require = jiti(rootDir, { interopDefault: true, esmResolve: true });
  try {
    return _require(id);
  } catch (error: any) {
    if (error.code !== 'MODULE_NOT_FOUND') {
      console.error(`Error trying import ${id} from ${rootDir}`, error);
    }
    return {};
  }
}

function log(arr: any) {
  return console.log(
    ...arr.map(([text, color]: any) => `\x1b[${color}m${text}\x1b[0m`)
  );
}

export async function startCli(
  cwd = process.cwd(),
  argv = process.argv,
) {
  const configDir = path.resolve(cwd, 'agilecss.config.ts');

  try {
    const defineConfig = tryRequire('./agilecss.config', configDir) || {};

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
      .parse(argv);
    const options = commander.program.opts();

    const PORT = options.port || 4321;
    const server = http.createServer();

    let started = false;
    const input = configInput || './srcTest';

    const instance = new AgileCss();

    instance.setConfig(config);
    instance.plugins(plugins);

    if (customValue) {
      instance.customValue(customValue);
    }

    instance.on('success', (css: any) => {
      fs.writeFileSync(path.resolve(process.cwd(), configOutput), css);
      const timeoutId = setTimeout(() => {
        started = true;
        clearTimeout(timeoutId);
      }, 1000);
    });

    instance.on('valid', (diagnostic: any) => {
      if (started && options.watch) {
        const { message, className } = diagnostic;
        log([
          [`[${message}]`, 36],
          [`(class: ${className})`, 36],
        ]);
      }
    });

    instance.on('invalid', (diagnostic: any) => {
      const { message, className } = diagnostic;
      log([
        [`[${message}]`, 31],
        [`(class: ${className})`, 35],
      ]);
    });

    const atomicFind = (file: any) => {
      fs.readFile(path.resolve(cwd, file), 'utf8', (err, data) => {
        if (err) {
          throw err;
        }

        instance.find(data);
      });
    };

    const handleFiles = (files: any) => {
      for (let i = 0; i < files.length; i++) {
        atomicFind(files[i]);
      }
    };

    const initial = () => {
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
    };

    const watchFiles = () => {
      chokidar.watch(configInput).on('change', atomicFind);
    };

    if (options.watch) {
      server.listen(PORT, () => {
        initial();
        watchFiles();
        log([[`\n🚀 Agile CSS is running at port ${PORT}\n`, 36]]);
      });
    } else {
      initial();
    }
  } catch (error) {
    console.log(error);
  }
}
