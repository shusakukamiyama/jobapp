import React from 'react';
import Post from '../../define/model/post/Post';
import Comment from '../../define/model/comment/Comment';
import { Container, Button, TextField } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import GetPostTaskFactory from '../../lib/task/posts/GetPostTask';
import CreateCommentTaskFactory from '../../lib/task/comments/CreateCommentTask';
import GetCommentsTaskFactory from '../../lib/task/comments/GetCommentsTask';
import { CommentTile } from '../../component/comment/CommentTile';

type Props = {post: Post} & RouteComponentProps<{ id: string }>;

type State = {
    post: Post | null;
    comments: Comment[];
    content: string,
};

class PostDetailPage extends React.Component<Props, State> {
    public constructor(props: Props, state: State) {
        super(props, state);
        this.state = {
            post: null,
            comments: [],
            content: '',
        }
    }
    
    public componentDidMount() {
        this.onRefresh();
    }

    private onRefresh = () => {
        this.fetchPost();
        this.fetchComments();
    }

    private fetchPost = () => {
        const { id } = this.props.match.params;
        GetPostTaskFactory.create(id).execute()
            .then((post) => {
                if (!post) return;
                this.setState({ post });
            });
    }

    private fetchComments = () => {
        const { id } = this.props.match.params;
        GetCommentsTaskFactory.create(id).execute()
            .then((comments) => {
                if(comments.length === 0) return;
                this.setState({ comments });
            });
    }

    private sendComment = () => {
        const { content } = this.state;
        CreateCommentTaskFactory.create( content, this.state.post && this.state.post.id).execute();
        this.onRefresh();
    }

    public render() {
        const { post, comments, content } = this.state;
        return(
            <div>
                <Container>
                    <h1>詳細</h1>
                    <p>{post?.title}</p>
                    <p>{post?.content}</p>
                    {comments.map((comment) => <CommentTile content={comment.content} />)}
                    <TextField onChange={(event) => this.setState({ content: event.target.value })} value={content} />
                    <Button onClick={() => this.sendComment()}>コメントを作成</Button>
                </Container>
            </div>
        )
    }
}

export default withRouter(PostDetailPage);
