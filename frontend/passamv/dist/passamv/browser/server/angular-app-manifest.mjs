
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/register"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/directivo"
  },
  {
    "renderMode": 2,
    "route": "/asesor-financiero"
  },
  {
    "renderMode": 2,
    "route": "/examen-asesor-financiero"
  },
  {
    "renderMode": 2,
    "route": "/examen-directivo"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5095, hash: '55b093376c87ee50979a867177eca6e884751d7653842c437d9e9d2b71032d96', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1067, hash: 'a0ffab328bb93012afcb186983774239f34fbf55e40893407a17a0ca68aa4468', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 15215, hash: '0863ec736619e04688d010caf6d031f5f558ac64b3f95573d44d1b26d0377dac', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'examen-asesor-financiero/index.html': {size: 18818, hash: 'c281419dfdc039f863b0fffc116a25561d9495f1ef8e9ef07b5e9ca4ad324958', text: () => import('./assets-chunks/examen-asesor-financiero_index_html.mjs').then(m => m.default)},
    'asesor-financiero/index.html': {size: 18818, hash: 'c281419dfdc039f863b0fffc116a25561d9495f1ef8e9ef07b5e9ca4ad324958', text: () => import('./assets-chunks/asesor-financiero_index_html.mjs').then(m => m.default)},
    'directivo/index.html': {size: 18818, hash: 'c281419dfdc039f863b0fffc116a25561d9495f1ef8e9ef07b5e9ca4ad324958', text: () => import('./assets-chunks/directivo_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 20738, hash: 'b76fbe5763a063d4bb71a144979313b3c30e25bd400586da9f9ba4cb6a157ca3', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 18818, hash: 'c281419dfdc039f863b0fffc116a25561d9495f1ef8e9ef07b5e9ca4ad324958', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'examen-directivo/index.html': {size: 18818, hash: 'c281419dfdc039f863b0fffc116a25561d9495f1ef8e9ef07b5e9ca4ad324958', text: () => import('./assets-chunks/examen-directivo_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 18818, hash: 'c281419dfdc039f863b0fffc116a25561d9495f1ef8e9ef07b5e9ca4ad324958', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-BVJQD57C.css': {size: 230873, hash: 'YU+im7r2LDs', text: () => import('./assets-chunks/styles-BVJQD57C_css.mjs').then(m => m.default)}
  },
};
