module.exports = {
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
                            target: 'http://localhost:3000'
                        }
                    }
                }
            }
        }
    }
}