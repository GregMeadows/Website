import { Typography } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import HideOnMobile from '../components/HideOnMobile';
import Logo from '../components/Logo';
import NavigationItems from '../components/nav/NavigationItems';

const useStyles = makeStyles()(() => ({
  root: {
    textAlign: 'center',
    marginTop: '20vh',
  },
  navLayout: {
    marginTop: '4vh',
  },
}));

const Homepage: FunctionComponent = function Homepage() {
  const { classes } = useStyles();

  return (
    <section className={classes.root}>
      <Logo size={250} />
      <Typography variant="body1">
        Welcome to my site, here you can find out{' '}
        <Link to="/about">who I am</Link>, and see{' '}
        <Link to="/portfolio">examples of my work</Link>.
      </Typography>
      <HideOnMobile>
        <NavigationItems className={classes.navLayout} />
      </HideOnMobile>
    </section>
  );
};

export default Homepage;
