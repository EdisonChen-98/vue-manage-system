/*
 * @Author: Edison Chen
 * @Date: 2022-01-06 10:44:47
 */

const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
    publicPath: "/",
    runtimeCompiler: true,
    devServer: {
        proxy: 'http://127.0.0.1:3007'
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
    },
}