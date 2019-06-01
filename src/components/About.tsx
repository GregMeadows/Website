import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        margin: 16
    }
}), {
    classNamePrefix: 'about',
});

export const About: FunctionComponent = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography>About</Typography>
        </div>
    );
};