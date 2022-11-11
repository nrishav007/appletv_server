function corsResolver(req, res, next) {
    // Website you wish to allow to connect
    // running front-end application on port 3000
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); 
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
}

module.exports = corsResolver;