import { AppBar, Grid, SwipeableDrawer, Theme, Toolbar } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/styles';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from '../assets/consts';
import { Breadcrumb } from './Breadcrumb';
import { Hamburger } from './Hamburger';
import { Logo, logoSizes } from './Logo';
import { NavigationItems } from './NavigationItems';
import { useLocation } from './Routing';

const useStyles = makeStyles((theme: Theme) => ({
    hamburger: {
        position: 'fixed',
        visibility: 'visible',
        [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
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
        [theme.breakpoints.up(BREAKPOINT_TABLET)]: {
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
        [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
            width: 300,
        }
    },
    toolbar: theme.mixins.toolbar,
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
    mobileDisplayNone: {
        [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
            display: 'none',
        }
    },
    mobileDisplayBlock: {
        [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
            display: 'block',
        }
    },
    desktopDisplayNone: {
        [theme.breakpoints.up(800)]: {
            display: 'none',
        }
    }
}), {
    classNamePrefix: 'navigation',
});


export const Navigation: FunctionComponent = () => {
    const classes = useStyles();
    const theme = useTheme();
    const widthMobile = useMediaQuery(theme.breakpoints.down(BREAKPOINT_MOBILE));
    const drawerAnchor = widthMobile ? 'left' : 'top';
    
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
                        <Logo size={logoSizes.xs} />
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
                    <NavigationItems />
                </Grid>
            </SwipeableDrawer>
        </nav>
    );
};