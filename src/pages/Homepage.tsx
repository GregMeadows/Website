import React, { FunctionComponent } from 'react';
import { Typography, Theme } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { makeStyles } from '@material-ui/styles';
import { NavigationItems } from '../components/NavigationItems';
import { BREAKPOINT_MOBILE } from '../assets/consts';
import { HideOnMobile } from '../components/HideOnMobile';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        textAlign: 'center',
        marginTop: '20vh',
    },
    navLayout: {
        marginTop: '4vh',
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
            <HideOnMobile>
                <NavigationItems
                    className={classes.navLayout}
                    showIcons
                />
            </HideOnMobile>
        </section>
    );
};