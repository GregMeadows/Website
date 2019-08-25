import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    root: {
        textAlign: 'left',
    },
}), {
        classNamePrefix: 'homepage',
    });

export const Homepage: FunctionComponent = () => {
    const classes = useStyles();

    return (
        <section className={classes.root}>
            <Typography variant='h1'>Hello</Typography>
            <Typography variant='body1'>
                Welcome to my website, here you can find out <Link to="/about">who I am</Link>,
                and see <Link to="/portfolio">examples of my work</Link>. 
            </Typography>
        </section>
    );
};