const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#43AF79',
    "@link-color": "#1DA57A",
    "@border-radius-base": "2px",
    "@layout-trigger-background": "fff",
    "@layout-trigger-color":  "#43AF79",
   },
  }),
);
