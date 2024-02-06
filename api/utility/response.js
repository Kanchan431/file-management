
function generateResponse(res, msg = '',statusCode = 200, data = {}, success = false) {
    res.status(statusCode).send({
        success: success,
        msg: msg,
        data: data
    });
    return 0;
}

module.exports = { generateResponse };