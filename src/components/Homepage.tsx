import React, { FunctionComponent } from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { Logo } from './Logo';
import { main } from '../theme';

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
            <ThemeProvider theme={main}>
                <Logo />
            </ThemeProvider>
        </div>
    );
};