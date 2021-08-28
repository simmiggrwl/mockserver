import api from '../../services/api';
import { SET_CURRENT_SERVER, SET_SERVERS } from "../actionTypes";
import {addError, removeError} from './error';


export const setServers = servers => ({
    type: SET_SERVERS,
    servers,
});

export const setCurrentServer = server => ({
    type:SET_CURRENT_SERVER,
    server,
});

export const getServers = () => {
    return async dispatch => {
        try{
            const servers= await api.call('get', 'servers');
            dispatch(setServers(servers));
            dispatch(removeError());
        } catch(err){
            const error=err.response.data;
            dispatch(addError(error.message));
        }
    };
};

export const getUserServers = () => {
    return async dispatch => {
        try{
            const servers = await api.call('get', 'servers/user');
            dispatch(setServers(servers));
            dispatch(removeError());
        } catch (err){
            const error= err.response.data;
            dispatch(addError(error.message));
        }
    };
};

export const deleteServer = (path) => {
    return async dispatch => {
        try{
            await api.call('delete', `servers/${path}`);
            dispatch(removeError());
            window.location.href="/";  
        } catch(err){
            const error = err.response.data;
            dispatch(addError(error.message));
        }
    };
};

export const createServer = data => {
    return async dispatch => {
        try{
            const server = await api.call('post', 'servers', data);
            dispatch(setCurrentServer(server));
            dispatch(removeError());
        } catch (err){
            const error= err.response.data;
            dispatch(addError(error.message));
        }
    };
};

export const getCurrentServer = (path) => {
    return async dispatch => {
        try{
            const server = await api.call('get', `routes/${path}`);
            dispatch(setCurrentServer(server));
            dispatch(removeError());
        } catch(err){
            const error = err.response.data;
            dispatch(addError(error.message));
        }
    };
};
