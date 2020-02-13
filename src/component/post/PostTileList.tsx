import React from 'react';
import Post from '../../define/model/post/Post';
import { PostTile } from './PostTile';
import { Grid } from '@material-ui/core';

type Props = {
    posts: Post[];
    onPostTilePress: (post: Post) => void;
}

export default class PostTileList extends React.Component<Props> {
    public constructor(props: Props) {
        super(props);
    }

    private renderPostTileList = () => {
        return this.props.posts.map(post => (
            <PostTile key={post.id} post={post} onPostTilePress={this.props.onPostTilePress} />
        ));
    };

    public render() {
        return (
            <div>
                <h2>投稿一覧</h2>
                <Grid container direction='row'>
                    {this.renderPostTileList()}
                </Grid>
            </div>
        );
    }
}
