import React, { FunctionComponent } from 'react';
import { Typography, Theme } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { makeStyles } from '@material-ui/styles';
import { NavigationItems } from '../components/NavigationItems';
import { BREAKPOINT_MOBILE } from '../assets/consts';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        textAlign: 'center',
        marginTop: '20vh',
    },
    navLayout: {
        marginTop: '10vh',
        '& > :not(:last-child)': {
            borderRight: `1px solid ${theme.palette.divider}`,
            [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
                margin: 0,
                border: 'none',
            },
        },
    },
}), {
    classNamePrefix: 'header',
});
export const Homepage: FunctionComponent = () => {
    const classes = useStyles();

    return (
        <section className={classes.root}>
            <Logo size={250} />
            <Typography variant='body1'>
                Welcome to my site, here you can find out <Link to="/about">who I am</Link>,
                and see <Link to="/portfolio">examples of my work</Link>. 
            </Typography>
            <NavigationItems className={classes.navLayout} />
        </section>
    );
};