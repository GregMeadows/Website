import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Logo, logoSizes } from '../components/Logo';
import { HideOnMobile } from '../components/HideOnMobile';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    root: {
        textAlign: 'center',
        paddingTop: 40,
        margin: 0,
    },
    leftAligned: {
        paddingTop: '2rem',
        textAlign: 'left',
    },
    para: {
        paddingTop: '0.6rem',
    }
}), {
        classNamePrefix: 'homepage',
    });

export const Homepage: FunctionComponent = () => {
    const classes = useStyles();

    return (
        <section className={classes.root}>
            <HideOnMobile>
                <Logo size={logoSizes.xxxl} scale={14} />
            </HideOnMobile>
            <section className={classes.leftAligned}>
                <Typography variant='h1'>Hello</Typography>
                <Typography variant='body1' className={classes.para}>
                    Welcome to my portfolio site, here you can find out <Link to="/about">who I am</Link>,
                    and <Link to="/portfolio">examples of my work</Link>. 
                </Typography>
            </section>
        </section>
    );
};