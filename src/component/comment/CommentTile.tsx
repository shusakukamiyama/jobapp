import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

type Props = {
    content: string;
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

export const CommentTile = ({content} : Props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
        <CardContent>
            <Typography variant="body2" component="p">
            {content}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">いいね</Button>
        </CardActions>
        </Card>
    );
}
