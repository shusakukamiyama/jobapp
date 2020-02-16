import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Header } from '../../component/Header';
import TopPage from '../templates/TopPage';
import { SignUpPage } from '../templates/SignupPage';
import SignInPage from '../templates/SignInPage';
import PostDetailPage from '../templates/PostDetailPage';
import User from '../../define/model/user/User';

type Props = {
    user?: User | null;
};

export const TopRouter: React.FC<Props> = props => {
    return (
        <div>
            <Header user={props.user} />
            <Switch>
                <Route exact path='/' component={TopPage} />
                <Route path='/signup' component={SignUpPage} />
                <Route path='/signin' component={SignInPage} />
                <Route path='/posts/:id' component={PostDetailPage} />
                <Redirect to='/' />
            </Switch>
        </div>
    );
};
