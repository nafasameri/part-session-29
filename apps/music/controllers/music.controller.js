const MusicRepository = require("../repositories/music.repository");
const sendResponse = require('../../../modules/handler/response.handler');
const logger = require('log4js').getLogger();
const formidable = require('formidable')
// const musicRepository = new MusicRepository();

logger.level = 'debug';

const upload = async (req, res) => {
    try {
        const form = formidable({ multiples: true });
        console.warn(form);
        
        form.parse(req, (err, fields, files) => {
            console.error(err);
            sendResponse(res, 200, null, `
            <h2>With Node.js <code>"http"</code> module</h2>
            <form action="/api/upload" enctype="multipart/form-data" method="post">
              <div>Text field title: <input type="text" name="title" /></div>
              <div>File: <input type="file" name="multipleFiles" multiple="multiple" /></div>
              <input type="submit" value="Upload" />
            </form>
            <form action="/api/upload" enctype="multipart/form-data" method="post">
              <div>Text field title: <input type="text" name="title" /></div>
              <div>Text field with same name: <input type="text" name="title" /></div>
              <div>Other field <input type="text" name="other" /></div>
              <input type="submit" value="submit simple" />
            </form>
          `);
            // if (err)
                // return sendResponse(res, err.httpCode || 400, { 'Content-Type': 'text/plain' }, String(err));
            // sendResponse(res, 200, { 'Content-Type': 'application/json' }, JSON.stringify({ fields, files }, null, 2));
        });
    } catch (error) {
        logger.error(error);
        throw error;
    }
};


module.exports = {
    upload
};
