const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
    "@primary-color": "#56dd7f",
    "@text-color": "#5a6270",
    "@border-radius-base": "2px",
    "@layout-trigger-background": "fff",
    "@layout-trigger-color":  "@primary-color",
   },
  }),
);
