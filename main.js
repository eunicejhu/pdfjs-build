try {
var SystemJS = require('systemjs');
SystemJS.config({
    map: {
        'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
        'preset-env': 'node_modules/@babel',
        'semver': 'node_modules/semver',
        "@babel/compat-data/overlapping-plugins": "node_modules/@babel/compat-data/overlapping-plugins.js",
        "babel-plugin-polyfill-corejs3": "node_modules/babel-plugin-polyfill-corejs3/lib/index.js",
        "babel-plugin-polyfill-corejs2": "node_modules/babel-plugin-polyfill-corejs2/lib/index.js",
        "babel-plugin-polyfill-regenerator": "node_modules/babel-plugin-polyfill-regenerator/lib/index.js",
        "@babel/helper-plugin-utils": "node_modules/@babel/helper-plugin-utils/lib/index.js",
        "@babel/helper-compilation-targets": "node_modules/@babel/helper-compilation-targets/lib/index.js",
        "@babel/helper-plugin-utils": "node_modules/@babel/helper-plugin-utils/lib/index.js",
        'traceur': 'node_modules/traceur/bin/traceur.js',
        'moment': 'node_modules/moment/src',
        'pdfjs-dist': 'node_modules/pdfjs-dist'
    },
    transpiler: "plugin-babel",
    packages: {
        'moment': {
            main: 'moment.js'
        },
        "pdfjs-dist": {
            main: 'build/pdf.js'
        },
        "preset-env": {
            main: "preset-env/lib/index.js"
        },
        "semver": {
            main: "index.js"
        }
    },
    meta: {
        '*.js': {
          babelOptions: {
            presets: ['preset-env']
          }
        }
      }
});

SystemJS.import('./pdf.js')
    .then(function(test) {
        var t = test.test();
        console.log(t);
    })
    .catch(function(e) {
        console.error(e)
    });
} catch(e) {
    console.error({e})
}
