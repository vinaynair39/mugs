const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#F2AA4CFF',
    "@link-color": "#1DA57A",
    "@border-radius-base": "2px",
    "@layout-trigger-background": "fff",
    "@layout-trigger-color":  "#F2AA4CFF",
   },
  }),
);
