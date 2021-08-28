import React from 'react';
import {connect} from 'react-redux';

const Server = ({server}) => {
    
    return (<div>
        <h1>hi</h1>
        <h1>{server.servername}</h1>
    </div>
    );
};

export default connect(store => ({
    server: store.currentServer
}))(Server);