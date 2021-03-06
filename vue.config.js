module.exports = {
    publicPath: process.env.NODE_ENV === 'development' ? '/' : '/vue3Blog/dist',
    configureWebpack: () => {
        if (process.env.NODE_ENV === 'production') {
            console.log('生产')
            
        }
        else {
            console.log('测试')
            return {
                devServer: {
                    proxy: { // proxy URLs to backend development server
                        '/api': {
                            target: 'http://yangyangcsy.cn'
                        }
                    }
                }
            }
        }
    }
}