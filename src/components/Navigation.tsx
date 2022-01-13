import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { motion, useCycle } from 'framer-motion';
import React, { FunctionComponent, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import Hamburger from './Hamburger';
import Logo from './Logo';
import NavigationItems from './NavigationItems';

const useStyles = makeStyles()((theme) => ({
  hamburger: {
    position: 'fixed',
  },
  drawerLayout: {
    marginTop: '2%',
    marginBottom: '2%',
    [theme.breakpoints.down('sm')]: {
      width: '18rem',
    },
  },
}));

const Navigation: FunctionComponent = function Navigation() {
  const { classes } = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [isOpen, toggleOpen] = useCycle(false, true);

  // Close menu on scene change
  const { pathname, search } = useLocation();
  useEffect(() => {
    toggleOpen(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, search]);

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: 'circle(30px at 40px 40px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'}>
      <motion.div className="background" variants={sidebar} />
      <Hamburger onClick={() => toggleOpen()} className={classes.hamburger} />
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        className={classes.drawerLayout}
      >
        <Grid item>
          <Logo />
        </Grid>
        <NavigationItems showIcons />
      </Grid>
    </motion.nav>
  );
};

export default Navigation;
