import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        margin: 16
    },
    name: {
        fontSize: '12rem',
        fontFamily: 'Alegreya Sans, sans-serif',
    },
    title: {
        fontSize: '4.48rem',
        margin: '-0.5em 0 0 5.25em',
        color: '#0099ff',
    }
}), {
    classNamePrefix: 'logo',
});

export const Logo: FunctionComponent = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant='h1' className={classes.name}>Greg Meadows</Typography>
            <Typography variant='h2' className={classes.title}>Development Portfolio</Typography>
        </div>
    );
};