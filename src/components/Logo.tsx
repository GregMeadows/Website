import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface StyleProps {
    maxHeight: number;
    minHeight: number;
    viewWidth: string;
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
        height: props.viewWidth,
        transition: 'height 0.5s ease',
    }),
    svgName: {
        fill: theme.palette.text.secondary,
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: theme.typography.h1.fontWeight,
        fontSize: '14px',
    },
    svgTitle: {
        fill: theme.palette.primary.main,
        fontFamily: theme.typography.h3.fontFamily,
        fontWeight: theme.typography.h3.fontWeight,
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
 * Size dictates the max size of the logo. Logo is responsive and will shrink to fit screen.
 * @param size  Max size of the logo. Can be of type enum logoSizes, or a number representing height
 *              (e.g. 100 - this will be converted to px).
 * @param scale Number representing view-width (vw) percentage, used ot se the width of the logo,
 *              increasing this increases the logo in proportion to the page.
 *              Defaults to 10 (which is converted to '10vw').
 */
export const Logo: FunctionComponent<{
    size?: logoSizes | number;
    scale?: number;
}> = ({size, scale}) => {
    size = size || logoSizes.m;
    scale = scale || 10;
    const viewWidth = `${scale}vw`;

    const styleProps: StyleProps = {
        maxHeight: size,
        minHeight: size <= logoSizes.s ? size : logoSizes.s,
        viewWidth: viewWidth,
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