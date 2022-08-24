const MusicRepository = require("../repositories/music.repository");
const sendResponse = require('../../../modules/handler/response.handler');
const logger = require('log4js').getLogger();
const formidable = require('formidable')
// const musicRepository = new MusicRepository();

logger.level = 'debug';

const upload = async (req, res) => {
    try {
        const form = formidable({ multiples: true });

        form.parse(req, (err, fields, files) => {
            if (err)
                return sendResponse(res, err.httpCode || 400, { 'Content-Type': 'text/plain' }, String(err));
            sendResponse(res, 200, { 'Content-Type': 'application/json' }, JSON.stringify({ fields, files }, null, 2));
        });
    } catch (error) {
        logger.error(error);
        throw error;
    }
};


module.exports = {
    upload
};
