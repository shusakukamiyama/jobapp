import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './../../component/Header';
import TopPage from './../templates/TopPage';
import SignupPage from './../templates/SignupPage';
import PostDetailPage from './../templates/PostDetailPage';

export const TopRouter = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact={true} path='/' component={TopPage} />
                <Route path='/signup' component={SignupPage} />
                <Route path='/posts/:id' component={PostDetailPage} />
                <Redirect to="/" />;
            </Switch>
        </div>
    );
};