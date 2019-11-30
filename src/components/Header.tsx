import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Logo, logoSizes } from './Logo';

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
    
    return (
        <header className={classes.root}>
            <Logo size={logoSizes.l} />
        </header>
    );
};