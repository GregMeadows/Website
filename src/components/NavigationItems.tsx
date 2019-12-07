import { Grid, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { BREAKPOINT_MOBILE } from '../assets/consts';

const useStyles = makeStyles((theme: Theme) => ({
    item: {
        margin: '4% 6%',
        '& h2': {
            fontSize: '3rem',
        },
        [theme.breakpoints.down(800)]: {
            margin: '4%',
            '& h2': {
                fontSize: '2.5rem',
            },
        },
        [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
            margin: 0,
            '& h2': {
                fontSize: '2rem',
            },
            '&:hover': {
                background: theme.palette.background.highlight,
            },
        }
    },
    link: {
        color: theme.palette.text.primary,
        textAlign: 'center',
        display: 'block',
        '&:hover': {
            color: theme.palette.secondary.main,
        },
        [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
            padding: '4% 0',
            paddingLeft: 50,
            textAlign: 'left',
            borderBottom: `1px solid ${theme.palette.background.highlight}`,
            '&:hover': {
                color: theme.palette.text.primary,
            },
        }
    },
    mobileDisplayBlock: {
        [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
            display: 'block',
        }
    },
}), {
    classNamePrefix: 'navigation-items',
});


export const NavigationItems: FunctionComponent = () => {
    const classes = useStyles();

    return (
        <Grid 
            item
            container 
            direction='row'
            alignItems='center'
            justify='center'
            className={classes.mobileDisplayBlock}
        >
            <Grid item className={classes.item}>
                <Link to="/about" className={classes.link}>
                    <Typography variant='h2'>About</Typography>
                    <Typography variant='subtitle1'>Who Am I?</Typography>
                </Link>
            </Grid>
            <Grid item className={classes.item}>
                <Link to="/portfolio" className={classes.link}>
                    <Typography variant='h2'>Portfolio</Typography>
                    <Typography variant='subtitle1'>My Work</Typography>
                </Link>
            </Grid>
            <Grid item className={classes.item}>
                <Link to="/contact" className={classes.link}>
                    <Typography variant='h2'>Contact</Typography>
                    <Typography variant='subtitle1'>Say Hello</Typography>
                </Link>
            </Grid>
        </Grid>
    );
};