module.exports = {
    ...require('./auth'),
    ...require('./server'),
    ...require('./routes')
};

module.exports.notFound= (req, res, next) => {
    const err= new Error('Not Found');
    err.status=404;
    next(err);
};

module.exports.errors= (err,req,res,next) => {
    return res.status(err.status || 400).json({
        message: err.message || 'Something went wrong'
    });
};