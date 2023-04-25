import { IDefineConfig } from "../types/type";

const defineConfig = (options: IDefineConfig) => (): IDefineConfig => {
  return options;
};

export default defineConfig;
