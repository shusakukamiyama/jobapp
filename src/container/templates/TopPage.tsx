import React from 'react';
import Post from '../../define/model/post/Post';
import GetPostsTaskFactory from '../../lib/task/posts/GetPostsTask';

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

    private renderPosts = () => {
        const postTitle = this.state.posts.map(post => <p>{post.title}</p>);
        return postTitle;
    };

    public render() {
        return (
            <div className='App'>
                <h1>firebase連携</h1>
                <button onClick={() => this.fetchPosts()}>データを取得</button>
                {this.renderPosts()}
            </div>
        );
    }
}
