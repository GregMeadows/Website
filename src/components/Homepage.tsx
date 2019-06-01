import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { Logo } from './Logo';

const useStyles = makeStyles(() => ({
    root: {
        margin: 16
    }
}), {
    classNamePrefix: 'homepage',
});

export const Homepage: FunctionComponent = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography>Homepage</Typography>
            <Logo />
        </div>
    );
};