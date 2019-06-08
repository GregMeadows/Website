import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import { observer } from 'mobx-react-lite';

const useStyles = makeStyles((theme: Theme) => ({
    root :{
        width: 25,
        height: 22,
        cursor: 'pointer',
        zIndex: 1500,
        position: 'absolute',
        '& span': {
            display: 'block',
            position: 'absolute',
            height: 5,
            width: '100%',
            background: theme.palette.primary.main,
            borderRadius: 10,
            opacity: 1,
            left: 0,
            transform: 'rotate(0deg)',
            transition: 'all .15s ease .3s',
        },
        '& span:nth-child(1)': {
            top: 0,
        },
        '& span:nth-child(2), & span:nth-child(3)': {
            top: 9,
            transition: 'transform .15s ease 0s, background .1s linear .2s',
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
            transition: 'transform .15s ease .3s, background .1s linear .15s',
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


export const Hamburger: FunctionComponent<{
    onClick: () => void,
    state: boolean,
    className?: string,
}> = observer(({onClick, state, className}) => {
    const classes = useStyles();

    return (
        <div className={`${classes.root} ${state ? classes.active : ''} ${className}`} onClick={onClick}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
});