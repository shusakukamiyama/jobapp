import React from 'react';
import Post from '../../define/model/post/Post';
import GetPostsTaskFactory from '../../lib/task/posts/GetPostsTask';
import CreatePostTaskFactory from '../../lib/task/posts/CreatePostTask';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import PostTileList from '../../component/post/PostTileList';
import Header from '../../component/Header';

type Props = {};

type State = {
    posts: Post[];
    title: string;
};

export default class TopPage extends React.Component<Props, State> {
    public constructor(props: Props, state: State) {
        super(props, state);
        this.state = {
            posts: [],
            title: ''
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

    private createPost = (title: string, content: string) => {
        CreatePostTaskFactory.create(title, content).execute();
    };

    public render() {
        return (
            <div>
                <Header />
                <h1>理系就活口コミサイト</h1>
                <PostTileList posts={this.state.posts} />
                <TextField
                    id='standard-basic'
                    label='タイトル'
                    onChange={event => this.setState({ title: event.target.value })}
                    value={this.state.title}
                />
                <Button color='primary' variant='outlined' onClick={() => this.createPost(this.state.title, 'test')}>
                    送信
                </Button>
            </div>
        );
    }
}
