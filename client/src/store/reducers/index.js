import {combineReducers} from 'redux';
import error from './error';
import auth from './auth';
import {servers, currentServer} from './server';

export default combineReducers({
    auth,
    error,
    servers,
    currentServer
});