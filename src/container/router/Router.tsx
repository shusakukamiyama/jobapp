import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TopPage from './../templates/TopPage';
import SignupPage from './../templates/SignupPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path='/' component={TopPage} />
                <Route path='/signup' component={SignupPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;