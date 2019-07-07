import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Logo, logoSizes } from '../components/Logo';

const useStyles = makeStyles(() => ({
    root: {
        textAlign: 'center',
    }
}), {
        classNamePrefix: 'homepage',
    });

export const Homepage: FunctionComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Logo size={logoSizes.xxxl} />
        </div>
    );
};