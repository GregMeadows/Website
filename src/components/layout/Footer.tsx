import { Typography } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    background: theme.palette.background.default,
    zIndex: -1,
    width: '100%',
    position: 'sticky',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '2rem',
  },
  copyright: {
    color: theme.palette.text.secondary,
    userSelect: 'none',
  },
}));

const Footer: FunctionComponent = function Footer() {
  const { classes, cx } = useStyles();

  return (
    <footer className={cx(classes.root, 'mui-fixed')}>
      <Typography variant="subtitle2" className={classes.copyright}>
        Copyright © {new Date().getFullYear()}. Greg Meadows.
      </Typography>
    </footer>
  );
};

export default Footer;
