import { Typography } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import Logo from '../components/Logo';
import NavigationItems from '../components/nav/NavigationItems';

const useStyles = makeStyles()((theme) => ({
  root: {
    textAlign: 'center',
    marginTop: '10rem',
    [theme.breakpoints.down('md')]: {
      marginTop: '7rem',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '3rem',
    },
  },
  navLayout: {
    marginTop: '2rem',
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
      <NavigationItems className={classes.navLayout} delay={1} />
    </section>
  );
};

export default Homepage;
