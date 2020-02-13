import React from 'react';
import Post from '../../define/model/post/Post';
import { Container } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import GetPostTaskFactory from '../../lib/task/posts/GetPostTask';

type Props = {post: Post} & RouteComponentProps<{ id: string }>;

type State = {
    post: Post | null;
};

class PostDetailPage extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);
        this.state = {
            post: null,
        }
    }
    
    public componentDidMount() {
        this.fetchPost();
    }

    private fetchPost = () => {
        const { id } = this.props.match.params;
        GetPostTaskFactory.create(id).execute()
            .then((post) => {
                this.setState({ post: post });
            });
    }

    public render() {
        const { post } = this.state;
        return(
            <div>
                <Container>
                    <h1>投稿の詳細</h1>
                    <p>{post?.title}</p>
                </Container>
            </div>
        )
    }
}

export default withRouter(PostDetailPage);
