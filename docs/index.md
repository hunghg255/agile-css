# Atomic CSS Setup

## Demo
[React Atomic CSS](https://github.com/hunghg255/agile-css-atomic)


## Install

```bash
npm i agile-css@latest --save-dev
```

With `yarn`

```bash
yarn add agile-css@latest -D
```

## Install VScode extensions

[Agile Css Autocomplete extentions](https://marketplace.visualstudio.com/items?itemName=AgileCssAutocomplete.agile-css-autocomplete&ssr=false#overview)

## Setup

### Create file: `agilecss.config.ts` or `agilecss.config.mjs` or `agilecss.config.js`


```js
import { defineConfig, pfs, pixelToRem, rtl, validator } from "agile-css";

export default defineConfig({
  input: ["./src/**/*.jsx", "./src/**/*.js", "./src/**/*.tsx"],
  output: "./src/agile-css.css",
  defaultCss: `
    body {
      font-size: 14px;
    }
  `,
  validator,
  cache: true,
  plugins: [pixelToRem(62.5), rtl(), pfs(), testplugin2()],
  customValue(value) {
    return value;
  },
  breakpoints: {
    sm: "768px",
    md: "992px",
    lg: "1200px",
  },
  custom: {
    "color-primary": "var(--color-primary)",
    "color-secondary": "var(--color-secondary)",
    "color-tertiary": "var(--color-tertiary)",
    "color-quaternary": "var(--color-quaternary)",
  },
});

function testplugin2() {
  return ({ addBase }) => {
    addBase(`.testttttttttt { color: red }`);
  };
}
```

## CLI (file package.json)
```
-p: Port
-w: Watch
-c: Config
```

```json
{
  ...
  "scripts": {
    ...
    // production
    "prebuild": "agile-css",

    // development
    "agile-css": "agile-css -w",
    // OR
    "agile-css-port": "agile-css -p 1234 -w",
  },
  ...
}
```

### Custom config file

- You can also use a custom config file instead of `agilecss.config.ts`. Just create `<FILE_NAME>.config.ts` to build command

```js
Exp: awesome.config.ts
```

```json
{
  ...
  "scripts": {
    ...
    // production
    "prebuild": "agile-css -c awesome",

    // development
    "agile-css": "agile-css -w -c awesome",
    // OR
    "agile-css-port": "agile-css -p 1234 -w -c awesome",
  },
  ...
}
```

## Compile

```bash
npm run agile-css
```

## Syntax

```css
<property>:<value>|<pseudo>|<pseudo><important -> "!">...@<media>

Example:

Class Name               CSS
-----------------------------------------------------------------------------------------
c:red                 -> .c\:red { color: red }
bgc:blue!             -> .bgc\:blue\! { background-color: blue !important }
bd:1px_solid_yellow   -> .bd\:1px_solid_yellow { border: 1px solid yellow }
p:30px@md             -> @media (min-width:992px) { .p\:30px\@md { padding: 30px }
m:20px@+300px         -> @media (max-width:300px) { .m\:20px\@\+300px { margin: 20px } }
fz:20px|h             -> .fz\:20px\|h:hover { font-size: 20px }
cnt:(After_cnt)||af   -> .cnt\:\(After_cnt\)\|\|af::after { content: 'After ctn' }
cnt:(Before_cnt)|be   -> .cnt\:\(Before_cnt\)\|be:before { content: 'Before ctn' }
cnt:(Hover)|h||be     -> .cnt\:\(Hover\)\|be:hover:before { content: 'Hover' }
trf:scale(2)          -> .trf/:scale\(2\) { transform: scale(2) }
m:calc(20px_+_10px)   -> .m\:calc\(20px_+_10px\) { margin: calc(20px + 10px) }
```

## Result

> HTML

```html
<div class="c:red c:blue|h bgc:color-primary fz:20px ml:10px w:30%@md p:30px@md m:20px@+300px pos:relative!"></div>
```

> Output

```css
.c\:red { color: red }
.c\:blue\|h:hover { color: blue }
.bgc\:color-primary { background-color: var(--color-primary) }
.fz\:20px { font-size: 20px }
.ml\:10px { margin-left: 10px }
[dir="rtl"] .ml\:10px { margin-right: 10px }
.pos\:relative\! { position: relative !important }
@media (max-width:300px) {
.m\:20px\@\+300px { margin: 20px } }
@media (min-width:992px) {
.p\:30px\@md { padding: 30px }
.w\:30\%\@md { width: 30% } }
```

### About

<a href="https://www.buymeacoffee.com/hunghg255" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

Gia Hung – [hung.hg](https://hung.thedev.id)
