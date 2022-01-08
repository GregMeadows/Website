import {
  AppBar,
  Grid,
  SwipeableDrawer,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import Breadcrumb from './Breadcrumb';
import Hamburger from './Hamburger';
import Logo, { logoSizes } from './Logo';
import { NavigationItems } from './NavigationItems';

const useStyles = makeStyles()((theme) => ({
  hamburger: {
    position: 'fixed',
    visibility: 'visible',
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
    },
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
    },
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
    [theme.breakpoints.down('sm')]: {
      width: '18rem',
    },
  },
  toolbar: {
    height: theme.spacing(7),
  },
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
    [theme.breakpoints.down('sm')]: {
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
    [theme.breakpoints.down('sm')]: {
      padding: '4% 0',
      paddingLeft: 50,
      textAlign: 'left',
      borderBottom: `1px solid ${theme.palette.background.highlight}`,
      '&:hover': {
        color: theme.palette.text.primary,
      },
    },
  },
  mobileDisplayNone: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  mobileDisplayBlock: {
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  desktopDisplayNone: {
    [theme.breakpoints.up(800)]: {
      display: 'none',
    },
  },
}));

const Navigation: FunctionComponent = function Navigation() {
  const { classes } = useStyles();
  const theme = useTheme();
  const widthMobile = useMediaQuery(theme.breakpoints.down('md'));
  const drawerAnchor = widthMobile ? 'left' : 'top';

  // Drawer State
  const [showNav, setShowNav] = useState(false);
  const toggleNav = (state?: boolean) => () => {
    setShowNav(state || !showNav);
  };

  // Close menu on scene change
  const { pathname, search } = useLocation();
  useEffect(() => {
    setShowNav(false);
  }, [pathname, search]);

  return (
    <nav>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Hamburger
            onClick={toggleNav()}
            state={showNav}
            className={classes.hamburger}
          />
          <Breadcrumb
            className={`${classes.breadcrumb} ${
              showNav ? classes.activeBread : ''
            } ${classes.hamburger}`}
          />
          <div
            className={`${classes.appBarLogo} ${
              showNav ? classes.appBarLogoHidden : ''
            }`}
          >
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
          direction="column"
          alignItems="center"
          justifyContent="center"
          className={`${classes.drawerLayout} ${classes.mobileDisplayBlock}`}
        >
          <Grid item className={classes.mobileDisplayNone}>
            <Logo />
          </Grid>
          <NavigationItems showIcons />
        </Grid>
      </SwipeableDrawer>
    </nav>
  );
};

export default Navigation;
