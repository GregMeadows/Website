import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { Breadcrumbs } from '@mui/material';
import { motion } from 'framer-motion';
import React, { FunctionComponent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    fontSize: '0.8rem',
    '& .icon': {
      marginRight: 4,
      fontSize: '1.3em',
    },
  },
  linkBase: {
    display: 'flex',
    alignItems: 'center',
    padding: '2px 8px',
  },
  link: {
    borderRadius: 10,
    background: theme.palette.background.highlight,
    color: theme.palette.text.primary,
    transition: 'background 0.175s',
    '&:hover, &:focus': {
      color: theme.palette.text.primary,
      background: theme.palette.primary.main,
    },
  },
  separator: {
    marginLeft: -8,
    marginRight: -8,
  },
}));

interface BreadcrumbProps {
  className?: string;
}

const Breadcrumb: FunctionComponent<BreadcrumbProps> = function Breadcrumb({
  className,
}) {
  const { classes, cx } = useStyles();
  const { pathname } = useLocation();

  let pathnames;
  if (pathname !== '/') {
    pathnames = pathname.substring(1).split('/');
  }

  const homeFlat = (
    <>
      <HomeRoundedIcon fontSize="inherit" className="icon" />
      Home
    </>
  );

  let crumbs;
  if (pathnames && pathnames.length > 0) {
    crumbs = pathnames.map((value, index, initial) => {
      const label = value.charAt(0).toUpperCase() + value.slice(1);
      const last = index === initial.length - 1;
      const to = `/${initial.slice(0, index + 1).join('/')}`;
      return last ? (
        <span key={to}>{label}</span>
      ) : (
        <Link
          className={`${classes.linkBase} ${classes.link}`}
          to={to}
          key={to}
        >
          {label}
        </Link>
      );
    });
  }

  const breadcrumbVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        x: { stiffness: 50, velocity: -40 },
        delay: 0.4,
      },
    },
    closed: {
      x: -40,
      opacity: 0,
      transition: {
        x: { stiffness: 50 },
      },
    },
  };

  return (
    <Breadcrumbs
      aria-label="Breadcrumb"
      separator={
        <NavigateNextRoundedIcon
          fontSize="small"
          className={classes.separator}
        />
      }
      className={cx(classes.root, className)}
      component={motion.nav}
      variants={breadcrumbVariants}
      initial="closed"
      animate="open"
      exit="closed"
    >
      {pathnames ? (
        <Link to="/" className={cx(classes.linkBase, classes.link)}>
          {homeFlat}
        </Link>
      ) : (
        <span className={classes.linkBase}>{homeFlat}</span>
      )}
      {crumbs};
    </Breadcrumbs>
  );
};

export default Breadcrumb;
