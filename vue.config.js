module.exports = {
    runtimeCompiler: true,
    productionSourceMap: false,

    publicPath: process.env.NODE_ENV === 'production'
        ? ''
        : '/'
}
    //ApiUrl:'http://200.62.60.89:8998/via40online/api',
