import React from 'react';
import Servers from '../components/Servers';
import ErrorMessage from '../components/ErrorMessage';

const Homepage= props => (
    <div>
        <ErrorMessage />
        <Servers {...props}/>
    </div>
);

export default Homepage;