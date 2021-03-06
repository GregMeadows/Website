import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Theme, Grid } from '@material-ui/core';
import { Logo } from './Logo';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
        height: 300,
        zIndex: -1,
        width: '100%',
        position: 'fixed',
        bottom: 0,
    },
    grid: {
        height: 'calc(100% - 30px)'
    },
    item: {
        minWidth: 400,
        '&>*': {
            marginBottom: 10,
        }
    },
    copyright: {
        color: theme.palette.text.secondary,
        userSelect: 'none',
    }
}), {
    classNamePrefix: 'footer',
});

export const Footer: FunctionComponent = () => {
    const classes = useStyles();
    
    return (
        <footer className={`${classes.root} mui-fixed`}>
            <Grid 
                container 
                alignItems='center'
                justify='space-around'
                className={classes.grid}
            >
                <Grid item className={classes.item}>
                </Grid>
                <Grid item>
                    <Logo />
                </Grid>
            </Grid>
            <Typography variant='subtitle2' align='center' className={classes.copyright}>Copyright © {(new Date().getFullYear())}. Greg Meadows.</Typography>
        </footer>
    );
};