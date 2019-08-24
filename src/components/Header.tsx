import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Logo, logoSizes } from './Logo';
import { HideOnMobile } from './HideOnMobile';
import { useLocation } from './Routing';

const useStyles = makeStyles(() => ({
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
            <HideOnMobile>
                <Logo size={logoSizes.l} />
            </HideOnMobile>
        </header>
    );
};