const musicController = require("./controllers/music.controller");
const { fetchQueryStringFromURL, getPostData, getHeaders } = require('./middlewares');

const routes = [
  {
    url: "upload",
    method: "POST",
    controller: musicController.upload,
    middlewares: [fetchQueryStringFromURL],
  },
];

module.exports = routes;
