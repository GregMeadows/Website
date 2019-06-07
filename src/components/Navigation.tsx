import React, { FunctionComponent, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Drawer, Grid, Typography, Theme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Hamburger } from './Hamburger';

const useStyles = makeStyles((theme: Theme) => ({
    draw: {
        marginTop: '2%',
        marginBottom: '4%',
        '&>*': {
            marginBottom: '4%',
        }
    },
    item: {
        marginLeft: '6%',
        marginRight: '6%',
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.text.primary,
        textAlign: 'center',
        transition: 'color 0.175s',
        '&:hover': {
            color: theme.palette.secondary.main,
        }
    },
}), {
    classNamePrefix: 'nav',
});


export const Navigation: FunctionComponent = () => {
    const classes = useStyles();
    const gridDirection = useMediaQuery('(min-width:600px)') ? 'row' : 'column';

    const [showNav, setShowNav] = useState(false);
    const toggleNav = (state?: boolean) => () => {
          setShowNav(state ? state : !showNav);
    };

    return (
        <nav>
            <Hamburger onClick={toggleNav()} state={showNav} />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Drawer anchor="top" open={showNav} onClose={toggleNav(false)} >
                <Grid
                    container 
                    direction='column'
                    alignItems='center'
                    justify='center'
                    className={classes.draw}
                >
                    <Grid item>
                        <Logo  />
                    </Grid>
                    <Grid 
                        item
                        container 
                        direction={gridDirection} 
                        alignItems='center'
                        justify='center'
                    >
                        <Grid item className={classes.item}>
                            <Link to="/about" className={classes.link}>
                                <Typography variant='h3'>About</Typography>
                                <Typography variant='subtitle1'>Who Am I?</Typography>
                            </Link>
                        </Grid>
                        <Grid item className={classes.item}>
                            <Link to="/portfolio" className={classes.link}>
                                <Typography variant='h3'>Portfolio</Typography>
                                <Typography variant='subtitle1'>My Work</Typography>
                            </Link>
                        </Grid>
                        <Grid item className={classes.item}>
                            <Link to="/contact" className={classes.link}>
                                <Typography variant='h3'>Contact</Typography>
                                <Typography variant='subtitle1'>Say Hello</Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Drawer>
        </nav>
    );
};