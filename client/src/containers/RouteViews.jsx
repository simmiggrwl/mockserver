import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, withRouter} from 'react-router-dom'

import { getCurrentServer } from '../store/actions';
import AuthPage from '../pages/AuthPage';
import Homepage from '../pages/HomePage';
import ServerPage from '../pages/ServerPage';
import CreateServerPage from '../pages/CreateServerPage';

const RouteViews = ({auth, getCurrentServer}) => (<main>
    <Switch>
        <Route exact path="/" render={props=> <Homepage {...props} />} />
        <Route exact path="/login" render={() => <AuthPage authType="login" isAuthenticated={auth.isAuthenticated}/>}/>
        <Route exact path="/register" render={() => <AuthPage authType="register" isAuthenticated={auth.isAuthenticated}/>}/>
        <Route exact path="/routes/:servername" render={props=> (<ServerPage getServer={servername => getCurrentServer(servername)} {...props} /> )} />
        <Route exact path="/server/new" render={()=> <CreateServerPage isAuthenticated={auth.isAuthenticated} /> } />
    </Switch>
</main>
);

export default withRouter(connect(store => ({auth: store.auth}), {getCurrentServer})(RouteViews));
