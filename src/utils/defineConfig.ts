import { Config } from "../types/type";

const defineConfig = (options: Config) => (): Config => {
  return options;
};

export default defineConfig;
