import React from 'react';
import Post from '../../define/model/post/Post';
import GetPostsTaskFactory from '../../lib/task/posts/GetPostsTask';
import CreatePostTaskFactory from '../../lib/task/posts/CreatePostTask';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import PostTileList from '../../component/post/PostTileList';
import Header from '../../component/Header';
import { Container } from '@material-ui/core';
import CreateUserTaskFactory from '../../lib/task/users/CreateUserTask';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

type Props = {};

type State = {
    posts: Post[];
    title: string;
    content: string;
    email: string;
    password: string;
};

export default class SignupPage extends React.Component<Props, State> {
    public constructor(props: Props, state: State) {
        super(props, state);
        this.state = {
            posts: [],
            title: '',
            content: '',
            email: '',
            password: ''
        };
    }

    public componentDidMount() {
        
    }


    public render() {
        return (
            <div>
                <Header />
                <Router>
                    <Container>
                        <h1>サインイン</h1>
                    </Container>
                </Router>
            </div>
        );
    }
}
