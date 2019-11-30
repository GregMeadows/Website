import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Logo, logoSizes } from './Logo';
import { useLocation } from './Routing';

const useStyles = makeStyles(() => ({
    root: {
        textAlign: 'center',
        minHeight: '4rem',
    }
}), {
    classNamePrefix: 'header',
});

export const Header: FunctionComponent = () => {
    const classes = useStyles();
    const  { pathname } = useLocation();
    const isHomepage = (pathname === '/');
    
    return (
        <header className={classes.root}>
            <Logo size={isHomepage ? logoSizes.xxxl : logoSizes.l} />
        </header>
    );
};