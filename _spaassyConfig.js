const path = require('path')

module.exports = {
    server: {
        host: '127.0.0.1',
        port: 9001,
        proxy: [
            // {
            //     path: '/api',
            //     option: {
            //         target: 'http://127.0.0.1:8989',
            //         pathRewrite: {
            //             '^/api': "/"
            //         },
            //         changeOrigin: true
            //     }
            // }
        ]
    },
    webpack: {
        env_variable: {
            'process.env.PROJECTTYPE': JSON.stringify('SPAASSY'), // 系统级别，独立作为spa应用设置为“SPA”, 作为spaassy应用设置为“SPAASSY”
            'process.env.SYSTEMNAME': JSON.stringify('subProject') // 系统名称，会被作为系统的命名空间, 自定义命名
        },
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@http': path.resolve(__dirname, 'src/httpServer'),
            '@views': path.resolve(__dirname, 'src/views'),
            '@common': path.resolve(__dirname, 'src/common'),
            '@store': path.resolve(__dirname, 'src/store')
        },
        // 将第三方依赖单独打包并作为外部依赖，请保持主系统与系统的vendor配置一致
        dll: {
            entry: {
                vendor_dll: [
                    'react',
                    'redux',
                    'react-redux',
                    'axios',
                    'react-router',
                    'react-router-dom'
                ],
            }
        }
    }
}