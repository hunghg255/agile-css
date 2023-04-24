'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var rtlCSSJS = require('rtl-css-js');
var vscode_css_languageservice_1 = require('vscode-css-languageservice');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var rtlCSSJS__default = /*#__PURE__*/_interopDefault(rtlCSSJS);
var vscode_css_languageservice_1__default = /*#__PURE__*/_interopDefault(vscode_css_languageservice_1);

// src/utils/defineConfig.ts
var defineConfig = (options) => () => {
  return options;
};
var defineConfig_default = defineConfig;

// src/constants/constant.ts
var MEDIA_DEFAULT = "default";
var MEDIA_MIN_WIDTH = "@";
var MEDIA_MAX_WIDTH = "@+";
var MAX_CACHE_SIZE = 1e6;
var SPACE = " ";
var DOT = ".";
var COMPILED_SUCCESS = "Compiled successfully";
var CHAR_PATTERN = /(.*:)|((\||@|!).*)/g;
var UNDERCORE_PATTERN = /_/g;
var MIN_MAX_PATTERN = /-?\d+/g;
var MIN_MAX_DEFAULT_VALUE = [0, 0];
var CSS_PROPS = {
  anim: "animation",
  animdel: "animation-delay",
  animdir: "animation-direction",
  animdur: "animation-duration",
  animfm: "animation-fill-mode",
  animic: "animation-iteration-count",
  animn: "animation-name",
  animps: "animation-play-state",
  animtf: "animation-timing-function",
  ap: "appearance",
  bd: "border",
  bdl: "border-left",
  bdt: "border-top",
  bdb: "border-bottom",
  bdr: "border-right",
  bdc: "border-color",
  bdtc: "border-top-color",
  bdbc: "border-bottom-color",
  bdrc: "border-right-color",
  bdlc: "border-left-color",
  bdls: "border-left-style",
  bdlw: "border-left-width",
  bdrsbend: "border-bottom-right-radius",
  bdrsbl: "border-bottom-left-radius",
  bdrstend: "border-top-right-radius",
  bdrstl: "border-top-left-radius",
  bdrw: "border-right-width",
  bdsp: "border-spacing",
  bds: "border-style",
  bdts: "border-top-style",
  bdbs: "border-bottom-style",
  bdw: "border-width",
  bdtw: "border-top-width",
  bdbw: "border-bottom-width",
  bdrs: "border-radius",
  bg: "background",
  bgi: "background-image",
  bgc: "background-color",
  bgcp: "background-clip",
  bgo: "background-origin",
  bgz: "background-size",
  bga: "background-attachment",
  bgp: "background-position",
  bgpx: "background-position-x",
  bgpy: "background-position-y",
  bgr: "background-repeat",
  bdcl: "border-collapse",
  bxz: "box-sizing",
  bxsh: "box-shadow",
  cl: "clear",
  c: "color",
  colm: "columns",
  colmc: "column-count",
  colmf: "column-fill",
  colmg: "column-gap",
  colmr: "column-rule",
  colmrc: "column-rule-color",
  colmrs: "column-rule-style",
  colmrw: "column-rule-width",
  colms: "column-span",
  colmw: "column-width",
  ctn: "contain",
  cnt: "content",
  cur: "cursor",
  d: "display",
  fil: "filter",
  flx: "flex",
  flxg: "flex-grow",
  flxs: "flex-shrink",
  flxb: "flex-basis",
  as: "align-self",
  fld: "flex-direction",
  flf: "flex-flow",
  fxf: "flex-flow",
  ai: "align-items",
  ac: "align-content",
  or: "order",
  jc: "justify-content",
  flw: "flex-wrap",
  fxw: "flex-wrap",
  fl: "float",
  ff: "font-family",
  fw: "font-weight",
  fz: "font-size",
  fs: "font-style",
  fv: "font-variant",
  h: "height",
  hy: "hyphens",
  ins: "inset",
  l: "left",
  lts: "letter-spacing",
  list: "list-style-type",
  lisp: "list-style-position",
  lisi: "list-style-image",
  lh: "line-height",
  m: "margin",
  mt: "margin-top",
  mr: "margin-right",
  mb: "margin-bottom",
  ml: "margin-left",
  mah: "max-height",
  maw: "max-width",
  mih: "min-height",
  miw: "min-width",
  o: "outline",
  obf: "object-fit",
  t: "top",
  b: "bottom",
  op: "opacity",
  ov: "overflow",
  ovx: "overflow-x",
  ovy: "overflow-y",
  ovs: "-webkit-overflow-scrolling",
  p: "padding",
  pt: "padding-top",
  pr: "padding-right",
  pb: "padding-bottom",
  pl: "padding-left",
  pe: "pointer-events",
  pos: "position",
  rsz: "resize",
  tbl: "table-layout",
  ta: "text-align",
  tal: "text-align-last",
  td: "text-decoration",
  ti: "text-indent",
  tov: "text-overflow",
  tren: "text-rendering",
  tr: "text-replace",
  tt: "text-transform",
  tsh: "text-shadow",
  trf: "transform",
  trfo: "transform-origin",
  trfs: "transform-style",
  prs: "perspective",
  prso: "perspective-origin",
  bfv: "backface-visibility",
  trs: "transition",
  trsde: "transition-delay",
  trsdu: "transition-duration",
  trsp: "transition-property",
  trstf: "transition-timing-function",
  us: "user-select",
  va: "vertical-align",
  v: "visibility",
  whs: "white-space",
  whsc: "white-space-collapse",
  w: "width",
  wob: "word-break",
  wow: "word-wrap",
  z: "z-index",
  fill: "fill",
  r: "right",
  stk: "stroke",
  stkw: "stroke-width",
  stklc: "stroke-linecap",
  stklj: "stroke-linejoin",
  gtc: "grid-template-columns",
  gta: "grid-template-areas",
  gt: "grid-template",
  gac: "grid-auto-columns",
  gar: "grid-auto-rows",
  gaf: "grid-auto-flow",
  gd: "grid",
  grs: "grid-row-start",
  gcs: "grid-column-start",
  gre: "grid-row-end",
  gce: "grid-column-end",
  gr: "grid-row",
  gc: "grid-column",
  ga: "grid-area",
  rg: "row-gap",
  cg: "column-gap",
  gp: "gap",
  maf: "masonry-auto-flow",
  at: "align-tracks",
  jt: "justify-tracks",
  ar: "aspect-ratio",
  ads: "additive-symbols",
  ji: "justify-items",
  js: "justify-self",
  a: "azimuth",
  bbm: "background-blend-mode",
  bl: "bleed",
  bs: "block-size",
  bbe: "border-block-end",
  bbs: "border-block-style",
  bbec: "border-block-end-color",
  bbsc: "border-block-start-color",
  bbes: "border-block-end-style",
  bbss: "border-block-start-style",
  bbew: "border-block-end-width",
  bbsw: "border-block-start-width",
  bi: "border-inline",
  bio: "border-image-outset",
  bir: "border-image-repeat",
  bis: "border-inline-style",
  biw: "border-inline-width",
  bie: "border-inline-end",
  biec: "border-inline-end-color",
  bisc: "border-inline-start-color",
  bies: "border-inline-end-style",
  biss: "border-inline-start-style",
  biew: "border-inline-end-width",
  bisw: "border-inline-start-width",
  brs: "border-right-style",
  bodb: "box-decoration-break",
  ba: "box-align",
  bb: "border-block",
  cs: "counter-set",
  cc: "caret-color",
  clp: "clip",
  cp: "clip-path",
  cr: "counter-reset",
  cif: "color-interpolation-filters",
  ci: "counter-increment",
  dir: "direction",
  ec: "empty-cells",
  eb: "enable-background",
  f: "font",
  fo: "flood-opacity",
  fr: "fill-rule",
  fc: "flood-color",
  ffs: "font-feature-settings",
  fk: "font-kerning",
  flo: "font-language-override",
  fsa: "font-size-adjust",
  fsth: "font-smooth",
  fva: "font-variant-alternates",
  fvc: "font-variant-caps",
  fvea: "font-variant-east-asian",
  fvl: "font-variant-ligatures",
  fvn: "font-variant-numeric",
  fvp: "font-variant-position",
  goh: "glyph-orientation-horizontal",
  gov: "glyph-orientation-vertical",
  gcg: "grid-column-gap",
  gg: "grid-gap",
  grg: "grid-row-gap",
  gtr: "grid-template-rows",
  io: "image-orientation",
  ir: "image-resolution",
  im: "ime-mode",
  is: "input-security",
  i: "inherits",
  k: "kerning",
  lc: "line-clamp",
  lb: "line-break",
  ls: "list-style",
  mbe: "margin-block-end",
  mbs: "mask-border-source",
  mie: "margin-inline-end",
  mis: "min-inline-size",
  mas: "marks",
  me: "marker-end",
  mm: "mask-mode",
  ms: "math-style",
  mi: "margin-inline",
  mo: "-moz-orient",
  mp: "-ms-perspective",
  mor: "motion-rotation",
  mat: "margin-trim",
  mbm: "mask-border-mode",
  ma: "-ms-accelerator",
  mad: "-moz-animation-duration",
  maic: "-moz-animation-iteration-count",
  man: "-moz-animation-name",
  maps: "-moz-animation-play-state",
  matf: "-moz-animation-timing-function",
  mbv: "-moz-backface-visibility",
  mbc: "-moz-background-clip",
  mbip: "-moz-background-inline-policy",
  mbo: "mask-border-outset",
  mbbc: "-moz-border-bottom-colors",
  mbi: "-moz-border-image",
  mblc: "-moz-border-left-colors",
  mbrc: "-moz-border-right-colors",
  mbtc: "-moz-border-top-colors",
  mba: "-moz-box-align",
  mbd: "-moz-box-direction",
  mbf: "-moz-box-flexgroup",
  mbog: "-moz-box-ordinal-group",
  mbp: "-ms-block-progression",
  mcc: "-moz-column-count",
  mcg: "-moz-column-gap",
  mcr: "-moz-column-rule",
  mcrc: "-moz-column-rule-color",
  mcrs: "-moz-column-rule-style",
  mcrw: "-moz-column-rule-width",
  mc: "mask-composite",
  mcw: "-moz-column-width",
  mffs: "-moz-font-feature-settings",
  mh: "-ms-hyphens",
  mpo: "-ms-perspective-origin",
  mtal: "-ms-text-align-last",
  mtdc: "-moz-text-decoration-color",
  mtdl: "-moz-text-decoration-line",
  mtds: "-moz-text-decoration-style",
  mtsa: "-ms-text-size-adjust",
  mto: "-ms-transform-origin",
  mtd: "-moz-transition-duration",
  mtp: "-moz-transition-property",
  mttf: "-moz-transition-timing-function",
  muf: "-moz-user-focus",
  mus: "-ms-user-select",
  mab: "mask-border",
  mczc: "-ms-content-zoom-chaining",
  mcz: "-ms-content-zooming",
  mczl: "-ms-content-zoom-limit",
  mczlm: "-ms-content-zoom-limit-min",
  mczs: "-ms-content-zoom-snap",
  mczsp: "-ms-content-zoom-snap-points",
  mczst: "-ms-content-zoom-snap-type",
  mf: "-ms-flex",
  mfa: "-ms-flex-align",
  mfd: "-ms-flex-direction",
  mff: "-ms-flow-from",
  mfia: "-ms-flex-item-align",
  mflp: "-ms-flex-line-pack",
  mfo: "-ms-flex-order",
  mfp: "-ms-flex-pack",
  mfw: "-ms-flex-wrap",
  mfi: "-ms-flow-into",
  mgc: "-ms-grid-columns",
  mgca: "-ms-grid-column-align",
  mgcs: "-ms-grid-column-span",
  mgl: "-ms-grid-layer",
  mgr: "-ms-grid-rows",
  mgra: "-ms-grid-row-align",
  mgrs: "-ms-grid-row-span",
  mhca: "-ms-high-contrast-adjust",
  mhlc: "-ms-hyphenate-limit-chars",
  mhll: "-ms-hyphenate-limit-lines",
  mhlz: "-ms-hyphenate-limit-zone",
  mim: "-ms-interpolation-mode",
  mlg: "-ms-layout-grid",
  mlgc: "-ms-layout-grid-char",
  mlgl: "-ms-layout-grid-line",
  mlgm: "-ms-layout-grid-mode",
  mlgt: "-ms-layout-grid-type",
  mlb: "-ms-line-break",
  mos: "-ms-overflow-style",
  mpox: "-ms-perspective-origin-x",
  mpoy: "-ms-perspective-origin-y",
  mpa: "-ms-progress-appearance",
  ms3c: "-ms-scrollbar-3dlight-color",
  msac: "-ms-scrollbar-arrow-color",
  msbc: "-ms-scrollbar-base-color",
  msdc: "-ms-scrollbar-darkshadow-color",
  msfc: "-ms-scrollbar-face-color",
  mshc: "-ms-scrollbar-highlight-color",
  mssc: "-ms-scrollbar-shadow-color",
  mstc: "-ms-scrollbar-track-color",
  msc: "-ms-scroll-chaining",
  msl: "-ms-scroll-limit",
  mslxm: "-ms-scroll-limit-x-min",
  mslym: "-ms-scroll-limit-y-min",
  msr: "-ms-scroll-rails",
  msspx: "-ms-scroll-snap-points-x",
  msspy: "-ms-scroll-snap-points-y",
  msst: "-ms-scroll-snap-type",
  mssx: "-ms-scroll-snap-x",
  mssy: "-ms-scroll-snap-y",
  mst: "-ms-scroll-translation",
  mta: "-ms-touch-action",
  mtch: "-ms-text-combine-horizontal",
  mtj: "-ms-text-justify",
  mtks: "-ms-text-kashida-space",
  mtup: "-ms-text-underline-position",
  mts: "-ms-touch-select",
  mtox: "-ms-transform-origin-x",
  mtoy: "-ms-transform-origin-y",
  mtoz: "-ms-transform-origin-z",
  mwb: "-ms-word-break",
  mww: "-ms-word-wrap",
  mwf: "-ms-wrap-flow",
  mwm: "-ms-writing-mode",
  mwt: "-ms-wrap-through",
  mz: "min-zoom",
  mza: "-ms-zoom-animation",
  nd: "nav-down",
  ni: "nav-index",
  nl: "nav-left",
  nr: "nav-right",
  nu: "nav-up",
  n: "negative",
  oa: "overflow-anchor",
  oad: "-o-animation-duration",
  oafm: "-o-animation-fill-mode",
  oaic: "-o-animation-iteration-count",
  oan: "-o-animation-name",
  oaps: "-o-animation-play-state",
  oatf: "-o-animation-timing-function",
  ofp: "offset-position",
  obi: "overscroll-behavior-inline",
  oof: "-o-object-fit",
  oop: "-o-object-position",
  ori: "orientation",
  otb: "-o-table-baseline",
  ots: "-o-tab-size",
  oto: "-o-transform-origin",
  ot: "-o-transition",
  otd: "-o-transition-duration",
  otp: "-o-transition-property",
  ottf: "-o-transition-timing-function",
  obe: "offset-block-end",
  obs: "offset-block-start",
  oie: "offset-inline-end",
  ois: "offset-inline-start",
  oc: "outline-color",
  oo: "outline-offset",
  os: "outline-style",
  ow: "overflow-wrap",
  prx: "prefix",
  pbe: "padding-block-end",
  pbs: "padding-block-start",
  pie: "padding-inline-end",
  pis: "padding-inline-start",
  pba: "page-break-after",
  pbb: "page-break-before",
  pbi: "page-break-inside",
  po: "paint-order",
  q: "quotes",
  rot: "rotate",
  ra: "ruby-align",
  ro: "ruby-overhang",
  rp: "ruby-position",
  rs: "ruby-span",
  s3c: "scrollbar-3dlight-color",
  sac: "scrollbar-arrow-color",
  sbc: "scrollbar-base-color",
  sdc: "scrollbar-darkshadow-color",
  sfc: "scrollbar-face-color",
  shc: "scrollbar-highlight-color",
  ssc: "scroll-snap-coordinate",
  stc: "scrollbar-track-color",
  sb: "scroll-behavior",
  ssd: "scroll-snap-destination",
  sspx: "scroll-snap-points-x",
  sspy: "scroll-snap-points-y",
  sst: "scroll-snap-type",
  sit: "shape-image-threshold",
  sm: "scroll-margin",
  so: "stroke-opacity",
  sr: "shape-rendering",
  s: "syntax",
  sc: "scrollbar-color",
  sd: "stroke-dashoffset",
  ts: "tab-size",
  toa: "touch-action",
  tdc: "text-decoration-color",
  tdl: "text-decoration-line",
  tds: "text-decoration-skip",
  tj: "text-justify",
  to: "text-orientation",
  tup: "text-underline-position",
  ub: "unicode-bidi",
  ur: "unicode-range",
  wa: "-webkit-appearance",
  wad: "-webkit-animation-duration",
  wafm: "-webkit-animation-fill-mode",
  waic: "-webkit-animation-iteration-count",
  wan: "-webkit-animation-name",
  waps: "-webkit-animation-play-state",
  watf: "-webkit-animation-timing-function",
  wbf: "-webkit-box-flex",
  wbv: "-webkit-backface-visibility",
  wbc: "-webkit-background-composite",
  wbo: "-webkit-box-orient",
  wbi: "-webkit-break-inside",
  wba: "-webkit-break-after",
  wbd: "-webkit-box-direction",
  wbfg: "-webkit-box-flex-group",
  wbog: "-webkit-box-ordinal-group",
  wbp: "-webkit-box-pack",
  wbr: "-webkit-box-reflect",
  wbs: "-webkit-box-sizing",
  wbb: "-webkit-border-before",
  wcba: "-webkit-column-break-after",
  wcbb: "-webkit-column-break-before",
  wcbi: "-webkit-column-break-inside",
  wcc: "-webkit-column-count",
  wcg: "-webkit-column-gap",
  wcr: "-webkit-column-rule",
  wcrc: "-webkit-column-rule-color",
  wcrs: "-webkit-column-rule-style",
  wcrw: "-webkit-column-rule-width",
  wc: "will-change",
  wcs: "-webkit-column-span",
  wcw: "-webkit-column-width",
  wf: "-webkit-filter",
  wff: "-webkit-flow-from",
  wfi: "-webkit-flow-into",
  wffs: "-webkit-font-feature-settings",
  wh: "-webkit-hyphens",
  wlb: "-webkit-line-break",
  wmbc: "-webkit-margin-bottom-collapse",
  wmc: "-webkit-mask-composite",
  wms: "-webkit-mask-size",
  wmtc: "-webkit-margin-top-collapse",
  wmi: "-webkit-mask-image",
  wmo: "-webkit-mask-origin",
  wmr: "-webkit-mask-repeat",
  wnm: "-webkit-nbsp-mode",
  wps: "-webkit-padding-start",
  wp: "-webkit-perspective",
  wpo: "-webkit-perspective-origin",
  wrf: "-webkit-region-fragment",
  wthc: "-webkit-tap-highlight-color",
  wtfc: "-webkit-text-fill-color",
  wtsa: "-webkit-text-size-adjust",
  wts: "-webkit-transform-style",
  wtsc: "-webkit-text-stroke-color",
  wtsw: "-webkit-text-stroke-width",
  wtc: "-webkit-touch-callout",
  wt: "-webkit-transition",
  wto: "-webkit-transform-origin",
  wtox: "-webkit-transform-origin-x",
  wtoy: "-webkit-transform-origin-y",
  wtoz: "-webkit-transform-origin-z",
  wtd: "-webkit-transition-duration",
  wtp: "-webkit-transition-property",
  wttf: "-webkit-transition-timing-function",
  wud: "-webkit-user-drag",
  wum: "-webkit-user-modify",
  wus: "-webkit-user-select",
  wi: "widows",
  ws: "word-spacing",
  wm: "-webkit-mask",
  zm: "zoom",
  mia: "-ms-ime-align",
  mcp: "-moz-context-properties",
  mfe: "-moz-float-edge",
  mfbii: "-moz-force-broken-image-icon",
  mir: "-moz-image-region",
  mors: "-moz-outline-radius",
  morb: "-moz-outline-radius-bottomright",
  mort: "-moz-outline-radius-topright",
  mss: "-moz-stack-sizing",
  mtb: "-moz-text-blink",
  mui: "-moz-user-input",
  mum: "-moz-user-modify",
  mwd: "-moz-window-dragging",
  mws: "-moz-window-shadow",
  wbbc: "-webkit-border-before-color",
  wbbs: "-webkit-border-before-style",
  wbbw: "-webkit-border-before-width",
  wlc: "-webkit-line-clamp",
  wma: "-webkit-mask-attachment",
  wmp: "-webkit-mask-position",
  wmpx: "-webkit-mask-position-x",
  wmpy: "-webkit-mask-position-y",
  wmrx: "-webkit-mask-repeat-x",
  wmry: "-webkit-mask-repeat-y",
  acc: "accent-color",
  animt: "animation-timeline",
  bf: "box-flex",
  bbc: "border-block-color",
  bbw: "border-block-width",
  beer: "border-end-end-radius",
  besr: "border-end-start-radius",
  bic: "border-inline-color",
  bser: "border-start-end-radius",
  bssr: "border-start-start-radius",
  bod: "box-direction",
  bfg: "box-flex-group",
  bol: "box-lines",
  bog: "box-ordinal-group",
  bo: "box-orient",
  bp: "box-pack",
  pca: "print-color-adjust",
  cv: "content-visibility",
  fos: "font-optical-sizing",
  fvs: "font-variation-settings",
  fca: "forced-color-adjust",
  hp: "hanging-punctuation",
  hc: "hyphenate-character",
  il: "initial-letter",
  ila: "initial-letter-align",
  ib: "inset-block",
  ibe: "inset-block-end",
  ibs: "inset-block-start",
  ii: "inset-inline",
  iie: "inset-inline-end",
  iis: "inset-inline-start",
  lhs: "line-height-step",
  mbr: "mask-border-repeat",
  mbw: "mask-border-width",
  mal: "max-lines",
  od: "offset-distance",
  ofr: "offset-rotate",
  ob: "overscroll-behavior",
  ocb: "overflow-clip-box",
  ocm: "overflow-clip-margin",
  oi: "overflow-inline",
  obb: "overscroll-behavior-block",
  obx: "overscroll-behavior-x",
  oby: "overscroll-behavior-y",
  pab: "padding-block",
  pi: "place-items",
  pc: "place-content",
  ps: "place-self",
  rm: "ruby-merge",
  sg: "scrollbar-gutter",
  sw: "scrollbar-width",
  smb: "scroll-margin-bottom",
  smbs: "scroll-margin-block-start",
  smbe: "scroll-margin-block-end",
  smi: "scroll-margin-inline",
  smis: "scroll-margin-inline-start",
  smie: "scroll-margin-inline-end",
  sml: "scroll-margin-left",
  smr: "scroll-margin-right",
  smt: "scroll-margin-top",
  sp: "scroll-padding",
  spb: "scroll-padding-bottom",
  spbs: "scroll-padding-block-start",
  spbe: "scroll-padding-block-end",
  spi: "scroll-padding-inline",
  spis: "scroll-padding-inline-start",
  spie: "scroll-padding-inline-end",
  spl: "scroll-padding-left",
  spr: "scroll-padding-right",
  spt: "scroll-padding-top",
  ssa: "scroll-snap-align",
  sss: "scroll-snap-stop",
  sstx: "scroll-snap-type-x",
  ssty: "scroll-snap-type-y",
  tcu: "text-combine-upright",
  tdsi: "text-decoration-skip-ink",
  tdt: "text-decoration-thickness",
  te: "text-emphasis",
  tec: "text-emphasis-color",
  tep: "text-emphasis-position",
  tes: "text-emphasis-style",
  tsa: "text-size-adjust",
  tuo: "text-underline-offset",
  tb: "transform-box",
  trl: "translate",
  sa: "size-adjust",
  ao: "ascent-override",
  do: "descent-override",
  fd: "font-display",
  lgo: "line-gap-override",
  iv: "initial-value",
  uz: "user-zoom",
  vf: "viewport-fit"
};
var CSS_PSEUDO = {
  af: "after",
  be: "before",
  fl: "first-letter",
  fli: "first-line",
  ph: "placeholder",
  a: "active",
  c: "checked",
  d: "default",
  di: "disabled",
  e: "empty",
  en: "enabled",
  fi: "first",
  fc: "first-child",
  fot: "first-of-type",
  fs: "fullscreen",
  f: "focus",
  fw: "focus-within",
  fv: "focus-visible",
  h: "hover",
  ind: "indeterminate",
  ir: "in-range",
  inv: "invalid",
  lc: "last-child",
  lot: "last-of-type",
  l: "left",
  li: "link",
  oc: "only-child",
  oot: "only-of-type",
  o: "optional",
  oor: "out-of-range",
  ps: "placeholder-shown",
  ro: "read-only",
  rw: "read-write",
  req: "required",
  r: "right",
  rt: "root",
  s: "scope",
  t: "target",
  va: "valid",
  vi: "visited",
  sl: "slotted",
  fil: "first-line",
  cp: "corner-present",
  sb: "single-button",
  nc: "nth-col",
  onot: "only-of-type",
  mal: "-moz-any-link",
  mb: "-ms-browse",
  mdo: "-moz-drag-over",
  mfn: "-moz-first-node",
  mf: "-ms-fill",
  mfs: "-moz-full-screen",
  mln: "-moz-list-number",
  mow: "-moz-only-whitespace",
  mp: "-moz-placeholder",
  msi: "-moz-submit-invalid",
  ms: "-moz-selection",
  mui: "-moz-ui-invalid",
  muv: "-moz-ui-valid",
  mud: "-moz-user-disabled",
  mwi: "-moz-window-inactive",
  mip: "-ms-input-placeholder",
  mka: "-ms-keyboard-active",
  nlc: "nth-last-col",
  ouor: "out-of-range",
  reo: "read-only",
  tw: "target-within",
  wfs: "-webkit-full-screen",
  ui: "user-invalid",
  uv: "user-valid",
  pls: "placeholder-shown",
  pip: "picture-in-picture",
  mfi: "-moz-focus-inner",
  mfo: "-moz-focus-outer",
  mlb: "-moz-list-bullet",
  mpb: "-moz-progress-bar",
  mc: "-ms-clear",
  me: "-ms-expand",
  mfl: "-ms-fill-lower",
  mfu: "-ms-fill-upper",
  mr: "-ms-reveal",
  mt: "-ms-track",
  mta: "-ms-ticks-after",
  mtb: "-ms-ticks-before",
  mv: "-ms-value",
  wfub: "-webkit-file-upload-button",
  wisb: "-webkit-inner-spin-button",
  wip: "-webkit-input-placeholder",
  wks: "-webkit-keygen-select",
  wmb: "-webkit-meter-bar",
  wmelgv: "-webkit-meter-even-less-good-value",
  wmov: "-webkit-meter-optimum-value",
  wmsv: "-webkit-meter-suboptimum-value",
  wosb: "-webkit-outer-spin-button",
  wpb: "-webkit-progress-bar",
  wpie: "-webkit-progress-inner-element",
  wpv: "-webkit-progress-value",
  wr: "-webkit-resizer",
  ws: "-webkit-scrollbar",
  wsb: "-webkit-scrollbar-button",
  wsc: "-webkit-scrollbar-corner",
  wst: "-webkit-slider-thumb",
  wstp: "-webkit-scrollbar-track-piece",
  wscb: "-webkit-search-cancel-button",
  wsd: "-webkit-search-decoration",
  wsrb: "-webkit-search-results-button",
  wsrd: "-webkit-search-results-decoration",
  wsrt: "-webkit-slider-runnable-track",
  wtdc: "-webkit-textfield-decoration-container",
  wvb: "-webkit-validation-bubble",
  wvba: "-webkit-validation-bubble-arrow",
  wvbac: "-webkit-validation-bubble-arrow-clipper",
  wvbh: "-webkit-validation-bubble-heading",
  wvbm: "-webkit-validation-bubble-message",
  wvbtb: "-webkit-validation-bubble-text-block",
  tt: "target-text",
  mrp: "-moz-range-progress",
  mrt: "-moz-range-track",
  wpiv: "-webkit-progress-inner-value",
  se: "spelling-error",
  nch: "nth-child",
  nlch: "nth-last-child",
  nlot: "nth-last-of-type",
  ntot: "nth-of-type"
};

// src/utils/cssLinearInterpolation.ts
var cssLinearInterpolation = (value) => {
  let keys = Object.keys(value);
  let values = Object.values(value);
  if (keys.length !== 2) {
    throw new Error("cssLinearInterpolation() value must be exactly 2 values");
  }
  let m = (values[1] - values[0]) / (Number(keys[1]) - Number(keys[0]));
  let b = values[0] - m * Number(keys[0]);
  let sign = "+";
  if (b < 0) {
    sign = "-";
    b = Math.abs(b);
  }
  return m * 100 + "vw " + sign + " " + b + "px";
};
var cssLinearInterpolation_default = cssLinearInterpolation;

// src/utils/stylesMap.ts
var stylesMap = (styles, callback) => {
  return Object.entries(styles).reduce(function(obj, _ref) {
    let _extends2;
    let breakpoint = _ref[0], style = _ref[1];
    return Object.assign(
      {},
      obj,
      (_extends2 = {}, _extends2[breakpoint] = Object.entries(style).reduce(
        function(obj2, _ref2) {
          let selector = _ref2[0], css = _ref2[1];
          return Object.assign({}, obj2, callback(selector, css));
        },
        {}
      ), _extends2)
    );
  }, {});
};
var stylesMap_default = stylesMap;

// src/utils/pfs.ts
var pfs = (minDevice, maxDevice) => {
  let minDeviceVal = minDevice;
  let maxDeviceVal = maxDevice;
  if (!minDeviceVal) {
    minDeviceVal = 400;
  }
  if (!maxDeviceVal) {
    maxDeviceVal = 1200;
  }
  return function(val) {
    let styles = val.styles, addStyles = val.addStyles;
    addStyles(
      stylesMap_default(styles, function(selector, css) {
        let _ref4;
        let property = css[0], value = css[1];
        if (/pfs\(.*\)/g.test(value)) {
          let _value$match$map, _value$match, _cssLinearInterpolati, _ref3;
          let _ref2 = (_value$match$map = (_value$match = value.match(MIN_MAX_PATTERN)) == null ? void 0 : _value$match.map(Number)) != null ? _value$match$map : MIN_MAX_DEFAULT_VALUE, min = _ref2[0], max = _ref2[1];
          let newValue = "clamp(" + min + "px, " + cssLinearInterpolation_default(
            (_cssLinearInterpolati = {}, _cssLinearInterpolati[minDeviceVal] = min, _cssLinearInterpolati[maxDeviceVal] = max, _cssLinearInterpolati)
          ) + ", " + max + "px)";
          return _ref3 = {}, _ref3[selector] = [property, newValue], _ref3;
        }
        return _ref4 = {}, _ref4[selector] = css, _ref4;
      })
    );
  };
};
var pfs_default = pfs;

// src/utils/selectorTransformer.ts
var selectorTransformer = (selector) => {
  return selector.replace(/\|/g, "\\|").replace(/,/g, "\\,").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\//g, "\\/").replace(/\.\w*:/g, function(value) {
    return value.replace(/:/g, "\\:");
  }).replace(/;/g, "\\;").replace(/@/g, "\\@").replace(/#/g, "\\#").replace(/'/g, "\\'").replace(/"/g, '\\"').replace(/%/g, "\\%").replace(/\+/g, "\\+").replace(/>/g, "\\>").replace(/!/g, "\\!").replace(/`/g, "\\`").replace(/\.\d/g, function(value) {
    return "\\" + value;
  }).replace(/\^/g, "\\^").replace(/(-child|-type|:lang)\\\([\w-+\\]*\\\)/g, function(value) {
    let valNumber = value.replace(/.*\\\(|\\\)/g, "").replace(/_|\\/g, " ");
    return value.replace(/\\\(.*/g, "(" + valNumber + ")");
  });
};
var selectorTransformer_default = selectorTransformer;

// src/utils/rtlTranslateCalc.ts
var rtlTranslateCalc = (value) => {
  if (/translateX/g.test(value)) {
    return value.replace(/calc\(/, "calc(-1 * (").replace(/\)$/g, "))").replace(/\)\s*!important/g, ")) !important");
  }
  if (/translate\(/g.test(value)) {
    return value.replace(/calc\(/, "calc(-1 * (").replace(/\),/g, ")),");
  }
  return value;
};
var rtlTranslateCalc_default = rtlTranslateCalc;

// src/utils/rtl.ts
var resetValue = () => {
  return "initial";
};
var rtl = () => {
  return function(_ref) {
    let styles = _ref.styles, addStyles = _ref.addStyles, addBase = _ref.addBase;
    addStyles(
      stylesMap_default(styles, function(selector, css) {
        let _rtlCssJs, _ref6;
        let property = css[0], value = css[1];
        let _Object$entries$ = Object.entries(
          rtlCSSJS__default.default(
            (_rtlCssJs = {}, _rtlCssJs[property] = value, _rtlCssJs)
          )
        )[0], newProp = _Object$entries$[0], newValue = _Object$entries$[1];
        let start = selector.includes("[dir=rtl] ") ? "" : "[dir=rtl] ";
        if (newProp !== property) {
          let _ref3;
          addBase(
            selectorTransformer_default("" + start + selector) + " { " + property + ": " + resetValue() + " }"
          );
          return _ref3 = {}, _ref3[selector] = css, _ref3["" + start + selector] = [newProp, value], _ref3;
        }
        if (newValue !== value) {
          let _ref4;
          return _ref4 = {}, _ref4[selector] = css, _ref4["" + start + selector] = [property, newValue], _ref4;
        }
        if (/translate(\(calc|X\(calc)/g.test(value)) {
          let _ref5;
          return _ref5 = {}, _ref5[selector] = css, _ref5["" + start + selector] = [
            property,
            rtlTranslateCalc_default(value)
          ], _ref5;
        }
        return _ref6 = {}, _ref6[selector] = css, _ref6;
      })
    );
  };
};
var rtl_default = rtl;

// src/utils/pixelToRem.ts
var pixelToRem = (rootFontSize) => {
  return ({ styles, addStyles }) => {
    const newStyles = stylesMap_default(styles, (selector, css) => {
      const [property, value] = css;
      if (/[\d.]*px/g.test(value)) {
        const newValue = value.replace(/[\d.]*px/g, (val) => {
          const num = Number(val.replace("px", ""));
          return `${num * 62.5 / rootFontSize / 10}rem`;
        });
        const newCss = [property, newValue];
        return {
          [selector]: newCss
        };
      }
      return {
        [selector]: css
      };
    });
    addStyles(newStyles);
  };
};
var pixelToRem_default = pixelToRem;
var cssToTextDocument = function(text) {
  return vscode_css_languageservice_1__default.default.TextDocument.create("untitled://untitled", "css", 1, text);
};
var validator = (css) => {
  const cssLS = vscode_css_languageservice_1__default.default.getCSSLanguageService();
  const document = cssToTextDocument(css);
  const stylesheet = cssLS.parseStylesheet(document);
  const diagnostics = cssLS.doValidation(document, stylesheet);
  return diagnostics;
};
var validator_default = validator;

// src/utils/getBreakpoint.ts
var getBreakpoint = (config, selector) => {
  const hasBreakpoint = selector.includes(MEDIA_MIN_WIDTH);
  if (hasBreakpoint) {
    let _breakpoint$replace;
    const isMax = selector.includes(MEDIA_MAX_WIDTH);
    let breakpoint = selector.replace(/.*@\+?|!/g, "");
    const breakpointFromConfig = config.breakpoints[breakpoint];
    breakpoint = breakpointFromConfig || breakpoint;
    const num = Number(
      (_breakpoint$replace = breakpoint.replace(/\D/g, "")) != null ? _breakpoint$replace : "0"
    );
    const unit = breakpoint.replace(/.*\d+/g, "");
    if (isMax) {
      return "" + (num - (!!breakpointFromConfig ? 1 : 0)) + unit;
    }
    return breakpoint;
  }
  return MEDIA_DEFAULT;
};
var getBreakpoint_default = getBreakpoint;

// src/utils/removeRedundantChar.ts
var removeRedundantChar = (value) => {
  return value.replace(/^("|'|`|\s)/g, "");
};
var removeRedundantChar_default = removeRedundantChar;

// src/utils/cond.ts
var cond = (item) => {
  let _item_$match, _item_$match$length, _item_$match2;
  const item_ = removeRedundantChar_default(item);
  return ((_item_$match = item_.match(/\(|\)/g)) == null ? void 0 : _item_$match.length) != null && ((_item_$match$length = (_item_$match2 = item_.match(/\(|\)/g)) == null ? void 0 : _item_$match2.length) != null ? _item_$match$length : 0) % 2 !== 0;
};
var cond_default = cond;

// src/utils/removeDuplicate.ts
var removeDuplicate = (arr) => {
  return Array.from(new Set(arr));
};
var removeDuplicate_default = removeDuplicate;

// src/utils/getClassNames.ts
var getClassNames = (value, config, cssProps) => {
  const classNames = Object.keys(cssProps).reduce(function(arr, key) {
    const regexp = new RegExp(
      "(\"|'|`|\\s)" + key + ":(\\w|\\/|\\||\\.|\\+|\\*|\\(|\\)|\\!|%|@|#|,|;|-)*",
      "g"
    );
    return [].concat(
      arr,
      (value.match(regexp) || []).reduce(function(arr2, item) {
        if (cond_default(item)) {
          return arr2;
        }
        let newItem = removeRedundantChar_default(item);
        if (config.exclude.includes(newItem) || !/:./g.test(newItem)) {
          return arr2;
        }
        return [].concat(arr2, [newItem]);
      }, [])
    );
  }, []);
  return removeDuplicate_default([].concat(classNames, config.defaultClassNames));
};
var getClassNames_default = getClassNames;

// src/utils/getImportant.ts
var getImportant = (className) => {
  return /!/g.test(className) ? " !important" : "";
};
var getImportant_default = getImportant;

// src/utils/getPseudo.ts
var getPseudo = (className) => {
  const pseudos = className.match(/\|\w*(\([\w-+]*\)|)/g);
  if (!pseudos) {
    return "";
  }
  return pseudos.reduce(function(str, pseudo$1) {
    const _pseudo = pseudo$1.replace(/^\||\(.*\)/g, "");
    const valNumber = pseudo$1.replace(/.*\(|\)|[\|\w-]*$/g, "");
    const pseudoShorthand = CSS_PSEUDO[_pseudo] || _pseudo;
    if (valNumber) {
      return str + ":" + pseudoShorthand + "(" + valNumber + ")";
    }
    return str + ":" + pseudoShorthand;
  }, "");
};
var getPseudo_default = getPseudo;

// src/utils/handleValueHasContent.ts
var handleValueHasContent = (value) => {
  return /content:\s+\(.*\)/g.test(value) ? value.replace(/\(|\)/g, "'") : value;
};
var handleValueHasContent_default = handleValueHasContent;

// src/utils/getStyle.ts
var getStyle = (prop, value) => {
  let result = "{ " + prop + ": " + value + " }";
  return handleValueHasContent_default(result);
};
var getStyle_default = getStyle;

// src/utils/getValue.ts
var getValue = (config, className) => {
  const value = className.replace(CHAR_PATTERN, "").replace(UNDERCORE_PATTERN, SPACE);
  return value.split(SPACE).reduce(function(str, item) {
    let _config$custom$item;
    const newItem = ((_config$custom$item = config.custom[item]) == null ? void 0 : _config$custom$item.toString()) || item;
    return str + " " + newItem;
  }, "").trim();
};
var getValue_default = getValue;

// src/utils/removeNextLineWithIgnore.ts
var removeNextLineWithIgnore = (value) => {
  return value.replace(/@agilecss-ignore.*\n.*/g, "");
};
var removeNextLineWithIgnore_default = removeNextLineWithIgnore;

// src/utils/styleToCssString.ts
var styleToCssString = (styles) => {
  return Object.entries(styles).reduce(function(css, _ref) {
    const selector = _ref[0], style = _ref[1];
    if (!Array.isArray(style)) {
      return css;
    }
    const strStyle = getStyle_default.apply(void 0, style);
    const selector_ = selectorTransformer_default(selector).replace(/\s+/g, " ");
    return css + "\n" + selector_ + " " + strStyle;
  }, "");
};
var styleToCssString_default = styleToCssString;

// src/components/EventEmitter.ts
var EventEmitter = class {
  constructor() {
    this.id = 0;
    this.events = {};
  }
  on(eventType, listener) {
    let _extends2;
    this.id++;
    this.events = Object.assign(
      {},
      this.events,
      (_extends2 = {}, _extends2[eventType] = [].concat(this.events[eventType] || [], [
        //@ts-ignore
        {
          listener,
          id: this.id
        }
      ]), _extends2)
    );
    return this.id;
  }
  off(id) {
    for (let eventType in this.events) {
      let _extends3;
      this.events = Object.assign(
        {},
        this.events,
        (_extends3 = {}, _extends3[eventType] = this.events[eventType].filter(function(item) {
          return item.id !== id;
        }), _extends3)
      );
    }
  }
  emit(eventType, data) {
    if (this.events[eventType]) {
      this.events[eventType].forEach(function(_ref) {
        let listener = _ref.listener;
        listener(data);
      });
    }
  }
};
var EventEmitter_default = EventEmitter;

// src/index.ts
var event = new EventEmitter_default();
var AgileCss = class {
  constructor() {
    this.defaultConfig = {
      breakpoints: {
        sm: "768px",
        md: "992px",
        lg: "1200px"
      },
      custom: {},
      cache: true,
      parentSelector: "",
      defaultCss: "",
      exclude: [],
      defaultClassNames: []
    };
    this.classNames = [];
    this.styles = {};
    this.config = this.defaultConfig;
    this.cache = [];
    this._customValue = function(value) {
      return value;
    };
    this.cssProps = CSS_PROPS;
    this.pseudo = CSS_PSEUDO;
    this.valid = /* @__PURE__ */ new Set();
    this.value = "";
    this.prevInput = "";
  }
  handlePluginAddStyles(styles) {
    this.styles = Object.assign({}, this.styles, styles);
  }
  handlePluginAddBase(css) {
    if (!this.config.defaultCss.includes(css)) {
      this.config.defaultCss = this.config.defaultCss + "\n" + css;
    }
  }
  handlePluginAddComponent(css) {
    this.handlePluginAddBase(css);
  }
  plugins(_plugins) {
    let _this = this;
    event.on("plugin", function() {
      if (_plugins.length) {
        _plugins.forEach(function(plugin) {
          plugin({
            config: _this.config,
            cssProps: _this.cssProps,
            pseudo: _this.pseudo,
            styles: _this.styles,
            input: _this.value,
            prevInput: _this.prevInput,
            addStyles: _this.handlePluginAddStyles.bind(_this),
            addBase: _this.handlePluginAddBase.bind(_this),
            addComponent: _this.handlePluginAddComponent.bind(_this)
          });
        });
      }
    });
  }
  on(eventType, listener) {
    return event.on(eventType, listener);
  }
  off(id) {
    event.off(id);
  }
  _setClassNames() {
    const newValue = removeNextLineWithIgnore_default(this.value);
    const newClassNames = getClassNames_default(newValue, this.config, this.cssProps);
    this.classNames = removeDuplicate_default(
      [].concat(this.classNames, newClassNames)
    );
  }
  _isMediaMaxWidth(selector) {
    return selector.replace(/\\/g, "").includes(MEDIA_MAX_WIDTH);
  }
  _checkValidate(className, selector, style) {
    let _this$config$validato, _this$config;
    const breakpoint = getBreakpoint_default(this.config, selector);
    const newBreakpoint = this.config.breakpoints[breakpoint] || breakpoint;
    const isMax = this._isMediaMaxWidth(selector);
    const selector_ = selectorTransformer_default(selector);
    let css = selector_ + " " + style;
    if (newBreakpoint !== MEDIA_DEFAULT) {
      css = "@media (" + (isMax ? "max" : "min") + "-width:" + newBreakpoint + ") { " + selector_ + " " + style + " }";
    }
    if (this.valid.has(css)) {
      return false;
    }
    const diagnostics = (_this$config$validato = (_this$config = this.config).validator) === null ? void 0 : _this$config$validato.call(_this$config, css);
    if (diagnostics !== null && diagnostics.length) {
      event.emit("invalid", {
        message: diagnostics[0].message,
        className
      });
      this.classNames = this.classNames.filter(function(name) {
        return name !== className;
      });
      return true;
    }
    event.emit("valid", {
      message: COMPILED_SUCCESS,
      className
    });
    this.valid.add(css);
    return false;
  }
  _setStyles() {
    const _this2 = this;
    this.styles = this.classNames.reduce(
      function(styles, className) {
        let _extends2, _extends3;
        const propShorthand = className.replace(/:.*/g, "");
        const property = _this2.cssProps[propShorthand];
        const breakpoint = getBreakpoint_default(_this2.config, className);
        const important = getImportant_default(className);
        const value = "" + _this2._customValue(getValue_default(_this2.config, className)) + important;
        const parentSelector = !!_this2.config.parentSelector ? _this2.config.parentSelector + " " : "";
        if (!property || !className.includes(":") || !value) {
          return styles;
        }
        const selector = "" + parentSelector + DOT + (!!className.includes("|") ? "" + className + getPseudo_default(className) : className);
        const style = getStyle_default(property, value);
        if (_this2._checkValidate(className, selector, style)) {
          return styles;
        }
        return Object.assign(
          {},
          styles,
          (_extends3 = {}, _extends3[breakpoint] = Object.assign(
            {},
            styles[breakpoint],
            (_extends2 = {}, _extends2[selector] = [property, handleValueHasContent_default(value)], _extends2)
          ), _extends3)
        );
      },
      {}
    );
    event.emit("plugin", void 0);
  }
  _setCache() {
    this.cache.push(this.value);
    const len = this.cache.length;
    if (len > MAX_CACHE_SIZE) {
      this.cache = this.cache.slice(len - MAX_CACHE_SIZE, len);
    }
  }
  find(value) {
    this.value = value;
    if (this.config.cache) {
      if (!this.cache.includes(value)) {
        this._setClassNames();
        this._setStyles();
        this._setCache();
      }
    } else {
      this._setClassNames();
      this._setStyles();
    }
    this.prevInput = value;
    event.emit("success", this.getCss());
    return this;
  }
  setConfig(cfg) {
    if (!cfg) {
      cfg = {};
    }
    this.config = Object.assign({}, this.defaultConfig, cfg);
    return this;
  }
  setClassNames(classNames) {
    this.classNames = [].concat(this.classNames, classNames);
    this._setStyles();
    event.emit("success", this.getCss());
    return this;
  }
  getCss() {
    let _this3 = this;
    let css = Object.entries(this.styles).reduce(function(css2, _ref) {
      let breakpoint = _ref[0], style = _ref[1] ?? {};
      const newBreakpoint = _this3.config.breakpoints[breakpoint] || breakpoint;
      const _Object$keys = Object.keys(style), className = _Object$keys[0];
      const isMax = _this3._isMediaMaxWidth(className);
      const cssString = styleToCssString_default(style);
      if (newBreakpoint === MEDIA_DEFAULT) {
        return css2 + "\n" + cssString;
      }
      return css2 + "\n@media (" + (isMax ? "max" : "min") + "-width:" + newBreakpoint + ") { " + cssString + " }";
    }, "");
    let allCss = (this.config.defaultCss + "\n" + css).replace(/\n+/g, "\n");
    return allCss;
  }
  getClassNames() {
    return this.classNames;
  }
  reset() {
    this.classNames = [];
    this.styles = {};
    this.cache = [];
    this.valid = /* @__PURE__ */ new Set();
    return this;
  }
  customValue(callback) {
    this._customValue = callback;
  }
  addPropsSyntax(props) {
    this.cssProps = Object.assign({}, this.cssProps, props);
  }
  addPseudoSyntax(pseudo) {
    this.pseudo = Object.assign({}, this.pseudo, pseudo);
  }
  // create() {
  //   return new AgileCss();
  // }
};
var src_default = AgileCss;

exports.default = src_default;
exports.defineConfig = defineConfig_default;
exports.pfs = pfs_default;
exports.pixelToRem = pixelToRem_default;
exports.rtl = rtl_default;
exports.validator = validator_default;
