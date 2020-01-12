import React from 'react';
import './App.css';
import { appInitilize } from './lib/firebase/initialize/AppInitialize';
import GetPostsTaskFactory from './lib/task/posts/GetPostsTask';
import Post from './define/model/post/Post';

type Props = {};

type State = {
    posts: Post[];
};

export default class App extends React.Component<Props, State> {
    public constructor(props: Props, state: State) {
        super(props, state);
        this.state = {
            posts: []
        };
    }

    public componentDidMount() {
        //アプリケーションの初期化
        appInitilize();
    }

    private fetchPosts = async () => {
        await GetPostsTaskFactory.create()
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
