import React, { FunctionComponent, useState, useEffect } from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { Drawer, Grid, Typography, Theme, AppBar, Toolbar } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from 'react-router-dom';
import { Logo, logoSizes } from './Logo';
import { Hamburger } from './Hamburger';
import { useLocation } from './Routing';
import { Breadcrumb } from './Breadcrumb';
import { greyscaleAlt } from '../theme';

const useStyles = makeStyles((theme: Theme) => ({
    navFloat: {
        position: 'fixed',
        marginTop: '2%',
    },
    navSet: {
        position: 'absolute',
    },
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
    breadcrumb: {
        zIndex: 1499,
        transition: '.3s ease 0s, opacity .1s ease 0s, visibility 0s linear .5s',
        opacity: 0,
        visibility: 'hidden',
    },
    activeBread: {
        transition: '.5s ease .3s',
        opacity: 1,
        marginLeft: 30,
        visibility: 'visible',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 101,
    },
    appBarLogo: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'center',
        visibility: 'visible',
        opacity: 1,
        transition: 'opacity .1s ease .3s, visibility 0s linear 0s',
    },
    appBarLogoHidden: {
        visibility: 'hidden',
        opacity: 0,
        transition: 'opacity .1s ease 0s, visibility 0s linear .3s',
    }
}), {
    classNamePrefix: 'nav',
});


export const Navigation: FunctionComponent = () => {
    const classes = useStyles();
    const gridDirection = useMediaQuery('(min-width:600px)') ? 'row' : 'column';
    const showAppBar = !useMediaQuery('(min-width:600px)', {});

    // Drawer State
    const [showNav, setShowNav] = useState(false);
    const toggleNav = (state?: boolean) => () => {
          setShowNav(state ? state : !showNav);
    };

    // Close menu on scene change
    const  { pathname, search } = useLocation();
    useEffect(() => {
        setShowNav(false);
    }, [pathname, search]);

    // Hamburger & Breadcrumb
    const hamBread = (
        <ThemeProvider theme={greyscaleAlt}>
            <Hamburger onClick={toggleNav()} state={showNav} className={showAppBar ? classes.navSet : classes.navFloat} />
            <Breadcrumb  className={`${classes.breadcrumb} ${showNav ? classes.activeBread : ''} ${showAppBar ? classes.navSet : classes.navFloat}`} />
        </ThemeProvider>
    );

    const appBar = (
        <AppBar position='fixed' className={classes.appBar}>
            <Toolbar>
                {hamBread}
                <div className={`${classes.appBarLogo} ${showNav ? classes.appBarLogoHidden : ''}`}>
                    <Logo size={logoSizes.small} />
                </div>
            </Toolbar>
        </AppBar>
    );

    return (
        <nav>
            {showAppBar ? appBar : hamBread}
            <Drawer anchor="top" open={showNav} onClose={toggleNav(false)} >
                <Grid
                    container 
                    direction='column'
                    alignItems='center'
                    justify='center'
                    className={classes.draw}
                >
                    <Grid item>
                        <Logo />
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