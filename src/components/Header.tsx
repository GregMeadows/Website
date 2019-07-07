import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Theme, Grid } from '@material-ui/core';
import { Logo, logoSizes } from './Logo';
import { HideForMobile } from './HideForMobile';
import { useLocation } from './Routing';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        textAlign: 'center',
        paddingTop: 20,
        minHeight: '4rem',
    }
}), {
    classNamePrefix: 'header',
});

export const Header: FunctionComponent = () => {
    const classes = useStyles();
    const  { pathname } = useLocation();

    const isHomepage = (pathname === '/');

    if (isHomepage) {
        return null;
    }
    
    return (
        <header className={classes.root}>
            <HideForMobile>
                <Logo size={logoSizes.l} />
            </HideForMobile>
        </header>
    );
};