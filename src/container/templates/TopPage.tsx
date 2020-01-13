import React from 'react';
import Post from '../../define/model/post/Post';
import GetPostsTaskFactory from '../../lib/task/posts/GetPostsTask';
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from '@material-ui/core';
import CreatePostTaskFactory from '../../lib/task/posts/CreatePostTask';

type Props = {};

type State = {
    posts: Post[];
};

export default class TopPage extends React.Component<Props, State> {
    public constructor(props: Props, state: State) {
        super(props, state);
        this.state = {
            posts: []
        };
    }

    public componentDidMount() {
        this.fetchPosts();
    }

    private fetchPosts = () => {
        GetPostsTaskFactory.create()
            .execute()
            .then(posts => {
                console.log(posts);
                this.setState({
                    posts
                });
            });
    };

    private createPost = () => {
        CreatePostTaskFactory.create().execute();
    };

    private renderPosts = () => {
        const postCards = this.state.posts.map(post => (
            <Card style={{ margin: 10, backgroundColor: 'blue' }} onClick={() => alert('aaa')}>
                <CardContent>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        {post.title}
                    </Typography>
                </CardContent>
            </Card>
        ));
        return postCards;
    };

    public render() {
        return (
            <div className='App'>
                <h1>理系就活口コミサイト</h1>
                {this.renderPosts()}
                <button onClick={() => this.createPost()}>投稿作成ボタン</button>
            </div>
        );
    }
}
