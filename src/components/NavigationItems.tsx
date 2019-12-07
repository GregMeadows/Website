import { Grid, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { BREAKPOINT_MOBILE } from '../assets/consts';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import CodeIcon from '@material-ui/icons/Code';
import MessageIcon from '@material-ui/icons/Message';

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        '& > :not(:last-child)': {
            paddingRight: '5%',
            [theme.breakpoints.down(800)]: {
                paddingRight: '4%',
            },
            [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
                padding: 0,
            },
        },
        '& > :not(:first-child)': {
            paddingLeft: '5%',
            [theme.breakpoints.down(800)]: {
                paddingLeft: '4%',
            },
            [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
                padding: 0,
            },
        },
        [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
            display: 'block',
        }
    },
    item: {
        marginTop: '4%',
        marginBottom: '4%',
        '& h2': {
            fontSize: '3rem',
        },
        [theme.breakpoints.down(800)]: {
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
        },
    },
    link: {
        color: theme.palette.text.primary,
        textAlign: 'center',
        display: 'block',
        '&:hover': {
            color: theme.palette.secondary.main,
        },
        [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
            display: 'flex',
            alignItems: 'center',
            paddingTop: '4%',
            paddingBottom: '4%',
            paddingLeft: 50,
            textAlign: 'left',
            borderBottom: `1px solid ${theme.palette.background.highlight}`,
            '&:hover': {
                color: theme.palette.text.primary,
            },
        }
    },
    icon: {
        marginBottom: 10,
        fontSize: '3rem',
        [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
            marginBottom: 0,
            marginRight: 20,
            fontSize: '2.5rem',
        },
    }
}), {
    classNamePrefix: 'navigation-items',
});


export const NavigationItems: FunctionComponent<{
    className?: string;
    showIcons?: boolean;
}> = ({ className, showIcons }) => {
    const classes = useStyles();

    return (
        <Grid 
            item
            container 
            direction='row'
            alignItems='center'
            justify='center'
            className={`${classes.container} ${className}`}
        >
            <Grid item className={classes.item}>
                <Link to="/about" className={classes.link}>
                    {showIcons && (<PersonPinIcon fontSize="inherit" className={classes.icon} />)}
                    <div>
                        <Typography variant='h2'>About</Typography>
                        <Typography variant='subtitle1'>Who Am I?</Typography>
                    </div>
                </Link>
            </Grid>
            <Grid item className={classes.item}>
                <Link to="/portfolio" className={classes.link}>
                    {showIcons && (<CodeIcon fontSize="inherit" className={classes.icon} />)}
                    <div>
                        <Typography variant='h2'>Portfolio</Typography>
                        <Typography variant='subtitle1'>My Work</Typography>
                    </div>
                </Link>
            </Grid>
            <Grid item className={classes.item}>
                <Link to="/contact" className={classes.link}>
                    {showIcons && (<MessageIcon fontSize="inherit" className={classes.icon} />)}
                    <div>
                        <Typography variant='h2'>Contact</Typography>
                        <Typography variant='subtitle1'>Say Hello</Typography>
                    </div>
                </Link>
            </Grid>
        </Grid>
    );
};