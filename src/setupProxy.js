const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api/Login',
        createProxyMiddleware({
            target: 'http://localhost:5142',
            changeOrigin: true,
        })
    );
    app.use(
        '/api/Employee',
        createProxyMiddleware({
            target: 'http://localhost:5257',
            changeOrigin: true,
        })
    );
};