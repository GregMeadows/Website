import React, { FunctionComponent, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Theme, AppBar, Toolbar, SwipeableDrawer } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from 'react-router-dom';
import { Logo, logoSizes } from './Logo';
import { Hamburger } from './Hamburger';
import { useLocation } from './Routing';
import { Breadcrumb } from './Breadcrumb';

const useStyles = makeStyles((theme: Theme) => ({
    hamburger: {
        position: 'fixed',
        visibility: 'visible',
        [theme.breakpoints.down('xs')]: {
            position: 'absolute',
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
        marginLeft: 30,
        opacity: 1,
        visibility: 'visible',
    },
    appBar: {
        background: theme.palette.background.default,
        zIndex: theme.zIndex.drawer + 101,
        [theme.breakpoints.up('sm')]: {
            visibility: 'hidden',
        }
    },
    appBarLogo: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'center',
        transition: 'opacity .1s ease .3s, visibility 0s linear 0s',
    },
    appBarLogoHidden: {
        visibility: 'hidden',
        opacity: 0,
        transition: 'opacity .1s ease 0s, visibility 0s linear .3s',
    },
    drawerLayout: {
        marginTop: '2%',
        marginBottom: '2%',
        [theme.breakpoints.down('xs')]: {
            width: 300,
        }
    },
    toolbar: theme.mixins.toolbar,
    item: {
        margin: '4% 6%',
        [theme.breakpoints.down(720)]: {
            margin: '4%'
        },
        [theme.breakpoints.down('xs')]: {
            margin: 0,
            '&:hover': {
                background: theme.palette.background.highlight,
            },
        }
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.text.primary,
        textAlign: 'center',
        transition: 'color 0.175s',
        display: 'block',
        '&:hover': {
            color: theme.palette.secondary.main,
        },
        [theme.breakpoints.down('xs')]: {
            padding: '4% 0',
            paddingLeft: 50,
            textAlign: 'left',
            borderBottom: `1px solid ${theme.palette.background.highlight}`,
            '&:hover': {
                color: theme.palette.text.primary,
            },
        }
    },
    mobileDisplayNone: {
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        }
    },
    mobileDisplayBlock: {
        [theme.breakpoints.down('xs')]: {
            display: 'block',
        }
    },
    desktopDisplayNone: {
        [theme.breakpoints.up(800)]: {
            display: 'none',
        }
    }
}), {
    classNamePrefix: 'nav',
});


export const Navigation: FunctionComponent = () => {
    const classes = useStyles();
    const mobileWidth = useMediaQuery('(max-width:599px)');
    const drawerAnchor = mobileWidth ? 'left' : 'top';
    const linkVarient = mobileWidth ? 'h5' : 'h3';
    
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

    return (
        <nav>
            <AppBar position='fixed' className={classes.appBar}>
                <Toolbar>
                    <Hamburger onClick={toggleNav()} state={showNav} className={classes.hamburger} />
                    <Breadcrumb  className={`${classes.breadcrumb} ${showNav ? classes.activeBread : ''} ${classes.hamburger}`} />
                    <div className={`${classes.appBarLogo} ${showNav ? classes.appBarLogoHidden : ''}`}>
                        <Logo size={logoSizes.small} />
                    </div>
                </Toolbar>
            </AppBar>
            <SwipeableDrawer
                anchor={drawerAnchor}
                open={showNav}
                onClose={toggleNav(false)}
                onOpen={toggleNav(true)}
            >
                <div className={`${classes.toolbar} ${classes.desktopDisplayNone}`} />
                <Grid
                    container 
                    direction='column'
                    alignItems='center'
                    justify='center'
                    className={`${classes.drawerLayout} ${classes.mobileDisplayBlock}`}
                >
                    <Grid item className={classes.mobileDisplayNone}>
                        <Logo />
                    </Grid>
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
                                <Typography variant={linkVarient}>About</Typography>
                                <Typography variant='subtitle1'>Who Am I?</Typography>
                            </Link>
                        </Grid>
                        <Grid item className={classes.item}>
                            <Link to="/portfolio" className={classes.link}>
                                <Typography variant={linkVarient}>Portfolio</Typography>
                                <Typography variant='subtitle1'>My Work</Typography>
                            </Link>
                        </Grid>
                        <Grid item className={classes.item}>
                            <Link to="/contact" className={classes.link}>
                                <Typography variant={linkVarient}>Contact</Typography>
                                <Typography variant='subtitle1'>Say Hello</Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </SwipeableDrawer>
        </nav>
    );
};