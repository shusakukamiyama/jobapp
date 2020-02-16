import React from 'react';
import Post from '../../define/model/post/Post';
import { PostTile } from './PostTile';
import { Grid } from '@material-ui/core';

type Props = {
    posts: Post[];
}

export const PostTileList: React.FC<Props> = (props) => {
    return (
        <div>
            <h2>新着投稿</h2>
            <Grid container direction='row'>
                {props.posts.map(post => (<PostTile key={post.id} post={post} />))}
            </Grid>
        </div>
    );
}
