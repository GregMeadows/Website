import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface StyleProps {
    maxHeight: number;
    minHeight: number;
}

export enum logoSizes {
    xs = 40,
    s = 60,
    m = 80,
    l = 100,
    xl = 120,
    xxl = 140,
    xxxl = 160,
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
    root: (props: StyleProps) => ({
        maxHeight: props.maxHeight,
        minHeight: props.minHeight,
        height: '10vw',
        transition: 'height 0.5s ease',
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
    size = size || logoSizes.m
    const styleProps: StyleProps = {
        maxHeight: size,
        minHeight: size <= logoSizes.s ? size : logoSizes.s,
    };
    const classes = useStyles(styleProps);
    
    return (
        <Link to="/" className={classes.link}>
            <svg className={classes.root} viewBox="0 0 82.6 16.2" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="10" className={classes.svgName}>Greg Meadows</text>
                <text x="29.42" y="15" className={classes.svgTitle}>Development Portfolio</text>
            </svg>
        </Link>
    );
};