import React, { FunctionComponent } from 'react';
import { makeStyles } from 'tss-react/mui';
import Background from '../images/bg.jpg';

const useStyles = makeStyles()((theme) => ({
  root: {
    background: `#F5F5F5 url(${Background}) repeat`,
    width: '100%',
    overflowX: 'hidden',
    minHeight: '100%',
    marginTop: 0,
    marginBottom: 300,
    padding: '3rem 10vw 10rem',
    [theme.breakpoints.down('sm')]: {
      padding: '5rem 8vw',
    },
  },
}));

const Layout: FunctionComponent = function Layout({ children }) {
  const { classes, cx } = useStyles();

  return (
    <section className={cx(classes.root, 'mui-fixed')}>{children}</section>
  );
};

export default Layout;
