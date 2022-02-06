import React, { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import Logo, { logoSizes } from '../Logo';
import HideOnMobile from './HideOnMobile';

const useStyles = makeStyles()(() => ({
  root: {
    textAlign: 'center',
    minHeight: '4rem',
  },
}));

const Header: FunctionComponent = function Header() {
  const { classes } = useStyles();

  return (
    <>
      <HideOnMobile>
        <header className={classes.root}>
          <Logo size={logoSizes.l} />
        </header>
      </HideOnMobile>
      <Outlet />
    </>
  );
};

export default Header;
