const http = require('http');
const fs = require('fs');
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
    },
    form: {
        "image": fs.createReadStream('D:/Development/Work/Part/img/download (1).ico')
    }
};

const req = http.request(options, (res) => {
    res.on('data', (chunk) => {
        if (res.statusCode == 200)
            logger.info(JSON.parse(chunk.toString()));
        else
            logger.error(JSON.parse(chunk.toString()));
    });
});
req.write(querystring.stringify({ xsdfgh: 'asdfg' }));
req.end();
