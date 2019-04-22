const path = require('path')
const BASE_URL = process.env.NODE_ENV === 'production' ? '/zutnlp_platform_show' : '/'
const resolve = dir => path.join(__dirname, dir)
// var proEnv = require('./config/prod.env');  // 生产环境
// var uatEnv = require('./config/sit.env');  // 测试环境
// var devEnv = require('./config/dev.env');  // 本地环境
// const env = process.env.NODE_ENV;
// const devProxy = ['/pc','/weixin','android'];  // 代理
// let target = '';
// 默认是本地环境
// if(env==='production'){  // 生产环境
//     target = proEnv.BASE_API;
// }else if(env==='test'){ // 测试环境
//     target = uatEnv.BASE_API;
// }else{  // 本地环境
//     target = devEnv.BASE_API;
// }
// let proxyObj = {};
// devProxy.forEach((value, index) => {
//     proxyObj[value] = {
//         target: target,
//         changeOrigin: true,
//         pathRewrite: {
//             [`^${value}`]: value
//         }
//     };
// });

module.exports = {
    lintOnSave: false,
    outputDir: 'dist',
    assetsDir: 'static',
    pages: {
        index: {
            // entry for the pages
            entry: 'src/main.js',
            // the source template
            template: 'src/public/index.html',
            // output as dist/index.html
            filename: 'index.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: '首页',
            // chunks to include on this pages, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
        // when using the entry-only string format,
        // template is inferred to be `public/subpage.html`
        // and falls back to `public/index.html` if not found.
        // Output filename is inferred to be `subpage.html`.
        // subpage: ''
    },
    baseUrl: BASE_URL,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('_c', resolve('src/components'))
    },
    // 打包时不生成.map文件
    // productionSourceMap: false,
    // 跨域配置
    devServer: {
        // proxy: 'http://202.196.37.147:8088'
        port:8845,
        host:"127.0.0.1",
        // https: false,
        // hotOnly: false,
        // disableHostCheck: true,
        // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
        // proxy: proxyObj, // string | Object
        // before: app => {}
    },
    /*configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        }
    },*/
}
