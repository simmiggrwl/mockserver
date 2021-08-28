import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../store/actions';

const NavBar =({auth, logout}) => (
    <nav className="navbar">
        <div className="container">
        <ul className="navbar-container">
            <li>
                <Link className="navbar-item" to="/">Home</Link>
            </li>
            {!auth.isAuthenticated && <Fragment>
                <li>
                    <Link className="navbar-item" to="/register">Register</Link>
                </li>
                <li>
                    <Link className="navbar-item" to="/login">Login</Link>
                </li> 
            </Fragment>}
            {auth.isAuthenticated && <Fragment>
                <li>
                    <Link className="navbar-item" to="/server/new">Create Server</Link>
                </li>
                <li>
                    <p className="navbar-item" onClick={logout}>Logout</p>
                </li>
            </Fragment>}
        </ul>
        {auth.isAuthenticated && (<p className="navbar-user">Logged in as {auth.user.username}</p>)}
    </div></nav>
);

export default connect(store => ({auth: store.auth}), {logout})(NavBar);