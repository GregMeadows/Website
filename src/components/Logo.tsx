import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface StyleProps {
    height: number;
}

export enum logoSizes {
    small = 45,
    medium = 90,
    large = 180,
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
    root: (props: StyleProps) => ({
        height: props.height,
        transition: 'height 1s ease',
        textDecoration: 'none',
    }),
    svgName: {
        fill: theme.palette.text.secondary,
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: theme.typography.h1.fontWeight,
        fontSize: '14px',
    },
    svgTitle: {
        fill: theme.palette.primary.main,
        fontFamily: theme.typography.h2.fontFamily,
        fontWeight: theme.typography.h2.fontWeight,
        fontSize: '4.97px',
    },
    link: {
        padding: 4,
        display: 'inline-flex',
    }
}), {
    classNamePrefix: 'logo',
});

/**
 * Inserts the main logo with a variable size.
 * @param size can be of type enum logoSizes, or a number representing height (e.g. 100 - this will be converted to px).
 */
export const Logo: FunctionComponent<{
    size?: logoSizes | number;
}> = ({size}) => {

    const styleProps: StyleProps = {height: size || logoSizes.medium};
    const classes = useStyles(styleProps);
    
    return (
        <Link to="/" className={classes.link}>
            <svg className={classes.root} viewBox="0 0 82.6 16" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="10" className={classes.svgName}>Greg Meadows</text>
                <text x="29.42" y="14.8" className={classes.svgTitle}>Development Portfolio</text>
            </svg>
        </Link>
    );
};