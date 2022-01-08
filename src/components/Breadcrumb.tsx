import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { Breadcrumbs } from '@mui/material';
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
  homeFlat: {
    paddingTop: 4,
    paddingLeft: 4,
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
  const pathnames = pathname.split('/');

  const homeFlat = (
    <>
      <HomeRoundedIcon fontSize="inherit" className="icon" />
      Home
    </>
  );

  return (
    <Breadcrumbs
      aria-label="Breadcrumb"
      separator={
        <NavigateNextRoundedIcon
          fontSize="small"
          className={classes.separator}
        />
      }
      className={`${classes.root} ${className}`}
    >
      {pathnames.length === 0 ? (
        <span className={`${classes.linkBase} ${classes.homeFlat}`}>
          {homeFlat}
        </span>
      ) : (
        <Link to="/" className={cx(classes.linkBase, classes.link)}>
          {homeFlat}
        </Link>
      )}
      {pathnames.map((value, index) => {
        const label = value.charAt(0).toUpperCase() + value.slice(1);
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
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
      })}
      ;
    </Breadcrumbs>
  );
};

export default Breadcrumb;
