import React from 'react';
import Card from '@material-ui/core/Card';
import Post from '../../define/model/post/Post';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
            <Grid item xs={3} sm={3}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component='img'
                            alt='Contemplative Reptile'
                            height='140'
                            image={require('../../static/images/startup-594091_1920.jpg')}
                            title='Contemplative Reptile'
                        />
                        <CardContent>
                            <Typography gutterBottom variant='h5' component='h2'>
                                {post.title}
                            </Typography>
                            <Typography variant='body2' color='textSecondary' component='p'>
                                {post.content}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size='small' color='primary'>
                            シェア
                        </Button>
                        <Link to='/signup'>
                            <Button size='small' color='primary'>
                                もっと見る
                            </Button>
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
        );
    }
}
