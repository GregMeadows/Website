import React, { FunctionComponent } from 'react';
import { makeStyles } from 'tss-react/mui';
import Logo, { logoSizes } from './Logo';

const useStyles = makeStyles()(() => ({
  root: {
    textAlign: 'center',
    minHeight: '4rem',
  },
}));

const Header: FunctionComponent = function Header() {
  const { classes } = useStyles();

  return (
    <header className={classes.root}>
      <Logo size={logoSizes.l} />
    </header>
  );
};

export default Header;
