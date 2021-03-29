module.exports = {
    runtimeCompiler: true,
    productionSourceMap: false,

    publicPath: process.env.NODE_ENV === 'production'
        ? './via40onlineexpress/dist'
        : '/'
}
    //ApiUrl:'http://200.62.60.89:8998/via40online/api',
