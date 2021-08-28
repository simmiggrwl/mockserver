import React from 'react';
import ErrorMessage from '../components/ErrorMessage';
import CreateServer from '../components/CreateServer';
import {Redirect} from 'react-router-dom';


const CreateServerPage = ({isAuthenticated}) => {
    if (!isAuthenticated) return <Redirect to="/login" />;

    return (
        <div>
            <ErrorMessage />
            <CreateServer />
        </div>
    );
};

export default CreateServerPage;