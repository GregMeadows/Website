import { Grid, Modal } from '@mui/material';
import Logo from 'components/Logo';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import Breadcrumb from './Breadcrumb';
import Hamburger from './Hamburger';
import NavigationItems from './NavigationItems';
import NavMotionWrapper from './NavMotionWrapper';

const useStyles = makeStyles()((theme) => ({
  hamburger: {
    position: 'fixed',
    zIndex: theme.zIndex.modal + 1,
    top: 16,
    left: 16,
  },
  breadcrumb: {
    position: 'fixed',
    top: 29,
    left: 72,
  },
  drawerLayout: {
    paddingTop: '2%',
    paddingBottom: '2%',
    [theme.breakpoints.down('sm')]: {
      width: '18rem',
    },
  },
  background: {
    background: theme.palette.background.default,
  },
}));

const Navigation: FunctionComponent = function Navigation() {
  const { classes } = useStyles();

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleToggle = () => {
    if (isOpen) {
      handleClose();
    } else {
      handleOpen();
    }
  };

  // Close menu on scene change
  const { pathname, search } = useLocation();
  useEffect(() => {
    if (isOpen) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, search]);

  return (
    <>
      <Hamburger
        open={isOpen}
        onClick={handleToggle}
        className={classes.hamburger}
      />
      <Modal
        aria-labelledby="nav-title"
        aria-describedby="nav-description"
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <NavMotionWrapper in={isOpen}>
          <>
            <Breadcrumb className={classes.breadcrumb} />
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
              className={classes.drawerLayout}
            >
              <Grid item id="nav-title">
                <Logo />
              </Grid>
              <NavigationItems showIcons />
            </Grid>
          </>
        </NavMotionWrapper>
      </Modal>
    </>
  );
};

export default Navigation;
