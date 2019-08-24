import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
    }
}), {
    classNamePrefix: 'not-found',
});

export const NotFound: FunctionComponent = () => {
    const classes = useStyles();
    return (
        <section className={classes.root}>
            <Typography>Page Not Found</Typography>
        </section>
    );
};