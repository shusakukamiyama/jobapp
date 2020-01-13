import React from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from '@material-ui/core';
import Post from '../../define/model/post/Post';

type Props = {
    post: Post;
};

export default class PostTile extends React.Component<Props> {
    public constructor(props: Props) {
        super(props);
    }

    public render() {
        const { post } = this.props;

        return (
            <Card style={{ margin: 10, backgroundColor: 'blue' }} onClick={() => alert('aaa')}>
                <CardContent>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        {post.title}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}
