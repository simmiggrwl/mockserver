import React from 'react';
import Server from '../components/Server';
import ErrorMessage from '../components/ErrorMessage';

const ServerPage = ({match, getServer}) => {
    getServer(match.params.servername);

    return (
        <div>
            <ErrorMessage />
            <Server />
        </div>
    );
};

export default ServerPage;