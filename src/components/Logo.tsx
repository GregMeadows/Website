import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Theme } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface StyleProps {
    fontSize: string;
}

export enum logoSizes {
    small = '0.35rem',
    medium = '0.75rem',
    large = '1.6rem',
    massive = '3rem',
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
    root: (props: StyleProps) => ({
        fontSize: props.fontSize,
        transition: 'font-size 1s',
        textDecoration: 'none',
    }),
    name: {
        fontSize: '6em',
        fontWeight: 'bold',
        color: theme.palette.text.secondary,
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

/**
 * Inserts the main logo with a variable size.
 * @param size can be of type enum logoSizes, or a string of fontsize (e.g. '2rem').
 */
export const Logo: FunctionComponent<{
    size?: logoSizes | string;
}> = ({size}) => {
    let styleProps: StyleProps = {fontSize: `${size || logoSizes.medium}`};
    const classes = useStyles(styleProps);
    
    return (
        <Link to="/" className={classes.root}>
            <Typography variant='h1' className={classes.name}>Greg Meadows</Typography>
            <Typography variant='h2' className={classes.title}>Development Portfolio</Typography>
        </Link>
    );
};