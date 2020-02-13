import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Comment from '../../define/model/comment/Comment';

type Props = {
    comment: Comment;
}

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export const CommentTile = ({comment} : Props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
        <CardContent>
            <Typography variant="body2" component="p">
                {comment.content}
            </Typography>
            <Typography variant="body2" component="p">
                {comment.createdAt.toLocaleTimeString()}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">いいね</Button>
        </CardActions>
        </Card>
    );
}
