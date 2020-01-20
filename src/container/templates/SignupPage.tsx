import React from 'react';
import Post from '../../define/model/post/Post';
import { Container } from '@material-ui/core';

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

    public componentDidMount() {}

    public render() {
        return (
            <div>
                <Container>
                    <h1>サインイン</h1>
                </Container>
            </div>
        );
    }
}
