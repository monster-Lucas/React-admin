
const { override, fixBabelImports } = require('customize-cra');


module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',//按需打包对应样式
    }),
);
