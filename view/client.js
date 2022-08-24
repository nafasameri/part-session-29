const http = require('http');
const logger = require('log4js').getLogger();
logger.level = 'debug';
const config = require("../config");
const querystring = require('querystring');

const options = {
    hostname: config.serverConfig.hostname,
    port: config.serverConfig.port,
    path: '/music/upload',
    method: 'POST',
    headers: {
        'Content-Type': 'multipart/form-data'
    }
};

const req = http.request(options, (res) => {
    res.on('data', (chunk) => {
        logger.info(JSON.parse(chunk.toString()));
    });
});
req.write(querystring.stringify({ xsdfgh: 'asdfg' }));
req.end();
