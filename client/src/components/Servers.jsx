import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {getServers, getUserServers} from '../store/actions';

class Servers extends Component {
    constructor(props){
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        const {getServers} = this.props;
        getServers();
    }

    handleSelect(servername) {
        const { history } = this.props;
        history.push(`/routes/${servername}`);
    }

    render() {

        const {auth, getServers, getUserServers} =this.props;

        const servers = this.props.servers.map(server => (<li onClick={() => this.handleSelect(server.servername)} key={server._id}>{server.servername}</li>));
        return <Fragment>
            {auth.isAuthenticated && (
                <div className="button_center">
                    <button className="button" onClick={getServers}>
                        All Servers
                    </button>
                    <button className="button" onClick={getUserServers}>
                        My Servers
                    </button>
                   </div>
            )}
            <ul className="polls">{servers}</ul>
        </Fragment>
    }
}

export default connect(store=> ({
    auth : store.auth, 
    servers: store.servers}), 
    {getServers, getUserServers}
    )(Servers);