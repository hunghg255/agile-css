import path from 'node:path';
import jiti from 'jiti';
import * as commander from 'commander';
import http from 'http';
import fs from 'node:fs';
import AgileCss from './index';
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

const COLORS = {
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  console_color: '\x1b[0m',
} as const;

const colorConsoleText = (text: string, color: keyof typeof COLORS) => {
  const coloredText = `${COLORS[color]}${text}${COLORS.console_color}`;
  return console.log(coloredText);
};

const DEFAULT_FILE_NAME = 'agilecss';

export async function startCli(cwd = process.cwd(), argv = process.argv) {
  try {
    commander.program
      .option('-p, --port <number>', 'port to listen on', parseInt)
      .option('-w, --watch', 'watch for changes and reload')
      .option('-c, --config <file_name>', 'File name config')
      .parse(argv);
    const options = commander.program.opts();

    const PORT = options.port || 4321;
    const server = http.createServer();
    const FILE_NAME_CONFIG = options.config ?? DEFAULT_FILE_NAME;

    const configDir = path.resolve(cwd, FILE_NAME_CONFIG);

    let started = false;

    const defineConfig =
      tryRequire(`./${FILE_NAME_CONFIG}.config`, configDir) || {};

    if (JSON.stringify(defineConfig) === '{}') {
      throw new Error('Not Found Config');
    }

    const {
      input: configInput,
      output: configOutput,
      customValue,
      plugins = [],
      ...config
    } = defineConfig();

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
        colorConsoleText(`\n✅ ${message} (class: ${className})`, 'green');
      }
    });

    instance.on('invalid', (diagnostic: any) => {
      const { message, className } = diagnostic;
      colorConsoleText(`\n❌ ${message} (class: ${className})`, 'red');
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
        colorConsoleText(
          `🚀 Agile CSS is running at port ${PORT}`,
          'yellow'
        );
      });
    } else {
      initial();
    }
  } catch (error: any) {
    colorConsoleText('❌ Agile CSS Error: ' + error.message, 'red');
  }
}
