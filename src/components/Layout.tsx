import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
import Background from '../images/bg.jpg';
import { BREAKPOINT_MOBILE } from '../assets/consts';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        background: `#F5F5F5 url(${Background}) repeat`,
        width: '100%',
        overflowX: 'hidden',
        minHeight: '100%',
        marginTop: 0,
        marginBottom: 300,
        padding: '3rem 10vw 10rem',
        [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
            padding: '5rem 8vw',
        }
    }
}), {
    classNamePrefix: 'layout',
});

export const Layout: FunctionComponent = ({children}) => {
    const classes = useStyles();
    
    return (
        <section className={`${classes.root} mui-fixed`}>
            {children}
        </section>
    );
};