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
    },
    leftAligned: {
        textAlign: 'left',
    },
    spaced: {
        paddingTop: '5rem',
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
            <section className={`${classes.leftAligned} ${classes.spaced}`}>
                <Typography variant='h1'>Hello</Typography>
                <Typography variant='body1' className={classes.para}>
                    Welcome to my portfolio site, here you will find examples of <Link to="/portfolio">my work</Link>. 
                </Typography>
            </section>
        </section>
    );
};