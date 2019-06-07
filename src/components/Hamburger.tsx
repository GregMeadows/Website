import React, { FunctionComponent, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    root :{
        width: 25,
        height: 22,
        position: 'fixed',
        marginTop: '2%',
        cursor: 'pointer',
        zIndex: 10,
        '& span': {
            display: 'block',
            position: 'absolute',
            height: 5,
            width: '100%',
            background: theme.palette.primary.main,
            borderRadius: 9,
            opacity: 1,
            left: 0,
            transform: 'rotate(0deg)',
            transition: 'all .3s ease .5s',
        },
        '& span:nth-child(1)': {
            top: 0,
        },
        '& span:nth-child(2), & span:nth-child(3)': {
            top: 9,
            transition: 'transform .2s ease 0s, background .2s linear .3s',
        },
        '& span:nth-child(4)': {
            top: 18,
        },
    },
    active: {
        '& span:nth-child(1), & span:nth-child(4)': {
            top: 9,
            opacity: 0,
            transition: 'all .3s ease 0s',
        },
        '& span:nth-child(2), & span:nth-child(3)': {
            background: theme.palette.secondary.main,
            transition: 'transform .2s ease .3s, background .2s linear .25s',
        },
        '& span:nth-child(2)': {
           transform: 'rotate(45deg)',
        },
        '& span:nth-child(3)': {
            transform: 'rotate(-45deg)',
        },
    },
}), {
    classNamePrefix: 'hamburger',
});


export const Hamburger: FunctionComponent = () => {
    const classes = useStyles();

    const [hamState, setHamState] = useState(false);
    const toggleHam = () => {
        setHamState(!hamState);
    };

    return (
        <div className={classes.root + ' ' + (hamState ? classes.active : '')} onClick={toggleHam}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};