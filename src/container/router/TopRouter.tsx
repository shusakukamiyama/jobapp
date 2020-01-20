import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './../../component/Header';
import TopPage from './../templates/TopPage';
import SignupPage from './../templates/SignupPage';
import PostDetailPage from './../templates/PostDetailPage';

const TopRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact={true} path='/' component={TopPage} />
                    <Route path='/signup' component={SignupPage} />
                    <Route path='/detail' component={PostDetailPage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default TopRouter;
