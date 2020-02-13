import React from 'react';
import Post from '../../define/model/post/Post';
import GetPostsTaskFactory from '../../lib/task/posts/GetPostsTask';
import CreatePostTaskFactory from '../../lib/task/posts/CreatePostTask';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import PostTileList from '../../component/post/PostTileList';
import { Container } from '@material-ui/core';
import CreateUserTaskFactory from '../../lib/task/users/CreateUserTask';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<{}> {}

type State = {
    posts: Post[];
    title: string;
    content: string;
    email: string;
    password: string;
};

export default class TopPage extends React.Component<Props, State> {
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
        this.fetchPosts();
    }

    private fetchPosts = () => {
        GetPostsTaskFactory.create()
            .execute()
            .then(posts => {
                this.setState({
                    posts
                });
            });
    };

    private onPostTilePress = (post: Post) => {
        this.props.history.push({ pathname: '/detail', state: { post: post } });
    };

    private createPost = (title: string, content: string) => {
        CreatePostTaskFactory.create(title, content).execute();
    };

    private createUser = (email: string, passward: string) => {
        CreateUserTaskFactory.create(email, passward).execute();
    };

    public render() {
        return (
            <div>
                <Container>
                    <h1>理系就活口コミサイト</h1>
                    <TextField
                        id='standard-basic'
                        label='メールアドレス'
                        onChange={event => this.setState({ email: event.target.value })}
                        value={this.state.email}
                    />
                    <TextField
                        id='standard-basic'
                        label='パスワード'
                        onChange={event => this.setState({ password: event.target.value })}
                        value={this.state.password}
                    />
                    <Button
                        color='primary'
                        variant='outlined'
                        onClick={() => this.createUser('test@gmail.com', 'testtest')}
                    >
                        サインアップ
                    </Button>
                    <TextField
                        id='standard-basic'
                        label='タイトル'
                        onChange={event => this.setState({ title: event.target.value })}
                        value={this.state.title}
                    />
                    <TextField
                        id='standard-basic'
                        label='内容'
                        onChange={event => this.setState({ content: event.target.value })}
                        value={this.state.content}
                    />
                    <Button
                        color='primary'
                        variant='outlined'
                        onClick={() => this.createPost(this.state.title, this.state.content)}
                    >
                        送信
                    </Button>
                    <PostTileList posts={this.state.posts} onPostTilePress={this.onPostTilePress} />
                </Container>
            </div>
        );
    }
}
