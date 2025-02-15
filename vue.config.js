module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/daily-quote-admin/'
        : '/'
}