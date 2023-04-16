const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require ('express');
const router = express.Router();

// by default, you can't access URL's that are different than your own (different origin points) - this is a security feature built into the Web. However, you CAN use an tntermediary to " break into" or gat access to other domains and od things like data retrieval, etc - thimk of this as  visual "swipe card" that allows access. http-proxy-middleware is the swipe card - it's configured to allow access to an endpoint and let you use that domain. The target in this case is our back end Roku Service (the database with all of the users) - we can retreive them and show them in our UI with the middleware's access configured correctly.

router.use("/", createProxyMiddleware({
    target: 'http://localhost:5000',
    headers: {
        accept: "application/json, application/x-www-form-urlencoded"
    },
    changeOrigin: true
}))

module.exports = router;