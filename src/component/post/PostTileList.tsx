import React from 'react';
import Post from '../../define/model/post/Post';
import PostTile from './PostTile';

type Props = {
    posts: Post[];
};

export default class PostTileList extends React.Component<Props> {
    public constructor(props: Props) {
        super(props);
    }

    public render() {
        return this.props.posts.map(post => <PostTile post={post} />);
    }
}
