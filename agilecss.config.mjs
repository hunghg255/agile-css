import { defineConfig, pfs, pixelToRem, rtl, validator } from "agile-css/dist/index.mjs";

export default defineConfig({
  input: ['./srcTest/**/*.jsx', './srcTest/**/*.js', './srcTest/**/*.tsx'],
  output: './srcTest/agile-css.css',
  validator,
  cache: true,
  plugins: [pixelToRem(62.5), rtl(), pfs()],
  customValue(value) {
    // customValue
    console.log(value);
    return value;
  },
  breakpoints: {
    sm: '768px',
    md: '992px',
    lg: '1200px',
  },
  custom: {
    'color-primary': 'var(--color-primary)',
    'color-secondary': 'var(--color-secondary)',
    'color-tertiary': 'var(--color-tertiary)',
    'color-quaternary': 'var(--color-quaternary)',
  },
});
