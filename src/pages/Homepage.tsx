import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Logo, logoSizes } from '../components/Logo';
import { HideForMobile } from '../components/HideForMobile';
import { Typography } from '@material-ui/core';

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
            <HideForMobile>
                <Logo size={logoSizes.xxxl} scale={14} />
            </HideForMobile>
            <section className={`${classes.leftAligned} ${classes.spaced}`}>
                <Typography variant='h1'>Hello</Typography>
                <Typography variant='body1' className={classes.para}>
                    I'm Greg Meadows, 
                </Typography>
            </section>
        </section>
    );
};