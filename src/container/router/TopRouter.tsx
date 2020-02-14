import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Header } from './../../component/Header';
import TopPage from './../templates/TopPage';
import SignupPage from './../templates/SignupPage';
import PostDetailPage from './../templates/PostDetailPage';

type Props = {
    userId?: string | null;
}

export const TopRouter: React.FC<Props> = (props) => {
    return (
        <div>
            <Header userId={props.userId}/>
            <Switch>
                <Route exact={true} path='/' component={TopPage} />
                <Route path='/signup' component={SignupPage} />
                <Route path='/posts/:id' component={PostDetailPage} />
                <Redirect to="/" />;
            </Switch>
        </div>
    );
};