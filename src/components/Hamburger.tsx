import React, { FunctionComponent, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import { Breadcrumb } from './Breadcrumb';
import { observer } from 'mobx-react-lite';

const useStyles = makeStyles((theme: Theme) => ({
    root :{
        width: 25,
        height: 22,
        position: 'fixed',
        marginTop: '2%',
        cursor: 'pointer',
        zIndex: 1500,
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
    breadcrumb: {
        zIndex: 1499,
        transition: '.3s ease 0s, opacity .1s ease 0s',
        position: 'fixed',
        marginTop: '2%',
        opacity: 0,
    },
    activeBread: {
        transition: '.5s ease .3s',
        opacity: 1,
        marginLeft: 30,
    }
}), {
    classNamePrefix: 'hamburger',
});


export const Hamburger: FunctionComponent<{
    onClick: () => void,
    state: boolean,
}> = observer(({onClick, state}) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root + ' ' + (state ? classes.active : '')} onClick={onClick}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={classes.breadcrumb + ' ' + (state ? classes.activeBread : '')}>
                <Breadcrumb />
            </div>
        </>
    );
});