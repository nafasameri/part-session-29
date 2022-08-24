module.exports = (res, status, header, content) => {
    res.writeHead(status, header);
    res.end(JSON.stringify(content));
};