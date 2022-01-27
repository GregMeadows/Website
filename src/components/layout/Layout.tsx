import { ThemeProvider } from '@mui/material';
import Navigation from 'components/nav/Navigation';
import Background from 'images/bg.jpg';
import React, { FunctionComponent } from 'react';
import { greyscale, main } from 'theme';
import { makeStyles } from 'tss-react/mui';
import Footer from './Footer';

const useStyles = makeStyles()((theme) => ({
  root: {
    background: `#F5F5F5 url(${Background}) repeat`,
    width: '100%',
    overflowX: 'hidden',
    minHeight: '100%',
    marginTop: 0,
    padding: '3rem 10vw 10rem',
    [theme.breakpoints.down('sm')]: {
      padding: '5rem 8vw',
    },
  },
}));

const Layout: FunctionComponent = function Layout({ children }) {
  const { classes, cx } = useStyles();

  return (
    <>
      <ThemeProvider theme={greyscale}>
        <Navigation />
      </ThemeProvider>
      <ThemeProvider theme={main}>
        <section className={cx(classes.root, 'mui-fixed')}>{children}</section>
      </ThemeProvider>
      <ThemeProvider theme={greyscale}>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
