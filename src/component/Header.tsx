import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import User from '../define/model/user/User';

type Props = {
    user?: User | null;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2)
        },
        title: {
            flexGrow: 1
        },
        all: {
            backgroundColor: '#3AD6B2',
        }
    })
);

export const Header: React.FC<Props> = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='static' className={classes.all}>
                <Toolbar>
                    <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu' />
                    <Typography variant='h6' className={classes.title}>
                        <Link to='/'>ロゴ</Link>
                    </Typography>
                    {props.user ? <Button color='inherit'>{props.user.name}</Button> : null}
                </Toolbar>
            </AppBar>
        </div>
    );
};
