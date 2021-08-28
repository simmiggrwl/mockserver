const db = require('../models');
const jwt = require('jsonwebtoken');

exports.showServers= async(req,res,next) => {
    try{
        const servers = await db.Server.find()
        .populate('user', ['username', 'id']).populate('schemas');

        res.status(200).json(servers);

    } catch (err){
        err.status = 400;
        next(err);
    }
};

exports.userServers = async(req, res,next) =>{
    try{
        const {id} = req.decoded;
        const user = await db.User.findById(id)
        .populate('servers');

        res.status(200).json(user.servers);

    } catch (err){
        err.status=400;
        next(err);
    }
};

exports.createServer = async (req,res,next) => {
    try{
        const {id} = req.decoded;
        const user= await db.User.findById(id);

        const {servername, schemas} = req.body;
        const server= await db.Server.create({
            servername,
            schemas
        });
        user.servers.push(server._id);
        await user.save();

        res.status(201).json({server, user: user._id});
    } catch(err){
        err.status=400;
        next(err);
    }
};

exports.getServer= async(req,res,next) => {
    try{
        const {id} = req.params;

        const server= await db.Server.findById(id)
        .populate('user', ['username', 'id']).populate('schemas');

        if(!server) throw new Error('Server Not Found');
        res.status(200).json(server);

    } catch (err){
        err.status = 400;
        next(err);
    }
};

exports.deleteServer = async(req,res,next) =>{
    try{
        const {id: serverId} = req.params;
        const {id: userId} = req.decoded;

        const server= await db.Server.findById(serverId);
        if(!server) throw new Error('Server Not Found');
        if (server.user.toString() !== userId) {
            throw new Error('Unauthorised access');
        }

        await server.remove();
        db.Server.update;
        res.status(202).json(server);

    } catch(err) {
        err.status=400;
        next(err);
    }
};