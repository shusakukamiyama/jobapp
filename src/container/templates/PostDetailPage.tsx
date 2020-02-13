import React from 'react';
import Post from '../../define/model/post/Post';
import { Container } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<{}> {
    post: Post;
}

type State = {
    posts: Post[];
    title: string;
    content: string;
    email: string;
    password: string;
};

export default class PostDetailPage extends React.Component<Props, State> {
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
        //適切な型の指定の方法がわからないため一旦これで実装
        const state: any = this.props.location.state;
        return (
            <div>
                <Container>
                    <h1>投稿の詳細</h1>
                    <p>{state.post.title}</p>
                </Container>
            </div>
        );
    }
}
