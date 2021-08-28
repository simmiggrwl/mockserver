const db = require('../models');
const jwt = require('jsonwebtoken');

exports.getAll= async(req,res,next) => {
    try{
        const {servername}= req.params
        const servers = await db.Server.find({servername: servername})
        .populate('user', ['username', 'id'])

        res.status(200).json({
            servers
        });

    } catch (err){
        err.status = 400;
        next(err);
    }
};
