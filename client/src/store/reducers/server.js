import { SET_SERVERS, SET_CURRENT_SERVER } from "../actionTypes";

export const servers=(state=[], action) => {
    switch(action.type){
        case SET_SERVERS:
            return action.servers; 
        default:
            return state;
    }
};

export const currentServer = (state= {}, action) => {
    switch(action.type) {
        case SET_CURRENT_SERVER:
            return action.server;
        default:
            return state;    
    }
};