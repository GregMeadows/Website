import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        margin: 16
    }
}), {
    classNamePrefix: 'homepage',
});

/**
 * An initial home page that will be displayed to a logged in user.
 */
export const HomePage: FunctionComponent = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography>Homepage</Typography>
        </div>
    );
};