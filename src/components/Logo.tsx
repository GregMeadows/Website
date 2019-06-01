import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Theme } from '@material-ui/core';

interface StyleProps {
    fontSize: string;
}

export enum logoSizes {
    small = '0.4rem',
    medium = '0.75rem',
    large = '1.6rem',
    massive = '3rem',
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
    root: (props: StyleProps) => ({
        fontSize: props.fontSize,
        margin: 16,
    }),
    name: {
        fontSize: '6em',
        fontFamily: 'Alegreya Sans, sans-serif',
        fontWeight: 'bold',
        color: theme.palette.head.main,
    },
    title: {
        fontSize: '2.06em',
        margin: '-0.4em 0 0 5.66em',
        color: theme.palette.primary.main,
        fontWeight: 'bold',
    }
}), {
    classNamePrefix: 'logo',
});

export const Logo: FunctionComponent<{
    size?: logoSizes;
}> = ({size}) => {
    let styleProps: StyleProps = {fontSize: `${size || logoSizes.medium}`};
    const classes = useStyles(styleProps);
    
    return (
        <div className={classes.root}>
            <Typography variant='h1' className={classes.name}>Greg Meadows</Typography>
            <Typography variant='h2' className={classes.title}>Development Portfolio</Typography>
        </div>
    );
};