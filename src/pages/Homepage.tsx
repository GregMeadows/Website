import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Logo, logoSizes } from '../components/Logo';
import { HideForMobile } from '../components/HideForMobile';

const useStyles = makeStyles(() => ({
    root: {
        textAlign: 'center',
        paddingTop: 40,
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
        </section>
    );
};