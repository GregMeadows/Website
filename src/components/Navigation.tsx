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
    hamburger: {
        position: 'fixed',
        marginTop: '2%',
        visibility: 'visible',
        '@media (max-width:600px)': {
            position: 'absolute',
            marginTop: 0,
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
        zIndex: theme.zIndex.drawer + 101,
        '@media (min-width:600px)': {
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
    drawer: {
        marginTop: '2%',
        marginBottom: '2%',
        '@media (max-width:599px)': {
            marginTop: '4rem',
        }
    },
    drawerLinks: {
        '@media (max-width:599px)': {
            '& :nth-child(even)': {
                borderTop: `1px solid ${theme.palette.primary.main}`,
                borderBottom: `1px solid ${theme.palette.primary.main}`,
            },
        }
    },
    item: {
        margin: '4% 6%',
        '@media (max-width:660px)': {
            margin: '4%'
        },
        '@media (max-width:599px)': {
            margin: 0,
            '&:hover': {
                background: theme.palette.primaryAccent.main,
            },
        }
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.text.primary,
        textAlign: 'center',
        transition: 'color 0.175s',
        '&:hover': {
            color: theme.palette.secondary.main,
        },
        '@media (max-width:599px)': {
            '& h3': {
                padding: '2%',
            },
            '&:hover': {
                color: theme.palette.text.primary,
            },
        }
    },
    mobileDisplayNone: {
        '@media (max-width:599px)': {
            display: 'none',
        }
    },
    mobileDisplayBlock: {
        '@media (max-width:599px)': {
            display: 'block',
        }
    }
}), {
    classNamePrefix: 'nav',
});


export const Navigation: FunctionComponent = () => {
    const classes = useStyles();
    const mediaMobileWidth = useMediaQuery('(min-width:600px)');
    const gridDirection = useMediaQuery('(min-width:600px)') ? 'row' : 'column';
    let showAppBar = !mediaMobileWidth;
    
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
                    <ThemeProvider theme={greyscaleAlt}>
                        <Hamburger onClick={toggleNav()} state={showNav} className={classes.hamburger} />
                        <Breadcrumb  className={`${classes.breadcrumb} ${showNav ? classes.activeBread : ''} ${classes.hamburger}`} />
                        <div className={`${classes.appBarLogo} ${showNav ? classes.appBarLogoHidden : ''}`}>
                            <Logo size={logoSizes.small} />
                        </div>
                    </ThemeProvider>
                </Toolbar>
            </AppBar>
            <Drawer anchor="top" open={showNav} onClose={toggleNav(false)} >
                <Grid
                    container 
                    direction='column'
                    alignItems='center'
                    justify='center'
                    className={`${classes.drawer} ${classes.mobileDisplayBlock}`}
                >
                    <Grid item className={classes.mobileDisplayNone}>
                        <Logo />
                    </Grid>
                    <Grid 
                        item
                        container 
                        direction={gridDirection} 
                        alignItems='center'
                        justify='center'
                        className={`${classes.drawerLinks} ${classes.mobileDisplayBlock}`}
                    >
                        <Grid item className={classes.item}>
                            <Link to="/about" className={classes.link}>
                                <Typography variant='h3'>About</Typography>
                                <Typography variant='subtitle1' className={classes.mobileDisplayNone}>Who Am I?</Typography>
                            </Link>
                        </Grid>
                        <Grid item className={classes.item}>
                            <Link to="/portfolio" className={classes.link}>
                                <Typography variant='h3'>Portfolio</Typography>
                                <Typography variant='subtitle1' className={classes.mobileDisplayNone}>My Work</Typography>
                            </Link>
                        </Grid>
                        <Grid item className={classes.item}>
                            <Link to="/contact" className={classes.link}>
                                <Typography variant='h3'>Contact</Typography>
                                <Typography variant='subtitle1' className={classes.mobileDisplayNone}>Say Hello</Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Drawer>
        </nav>
    );
};