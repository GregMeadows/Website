import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
    },
}), {
        classNamePrefix: 'contact',
    });

export const Contact: FunctionComponent = () => {
    const classes = useStyles();

    return (
        <section className={classes.root}>
            <Typography variant='h1'>Contact Me</Typography>
            <Typography variant='body1'>

            </Typography>
        </section>
    );
};