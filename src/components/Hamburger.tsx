import { IconButton } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    width: 24,
    height: 20,
    cursor: 'pointer',
    zIndex: 1500,
    position: 'absolute',
    '&:hover': {
      '& span': {
        background: theme.palette.primary.light,
      },
    },
    '& span': {
      display: 'block',
      position: 'absolute',
      height: 4,
      width: '100%',
      background: theme.palette.primary.main,
      borderRadius: 10,
      opacity: 1,
      left: 0,
      transform: 'rotate(0deg)',
      transition: 'all .15s ease .3s, background .1s linear 0s',
    },
    '& span:nth-child(1)': {
      top: 0,
    },
    '& span:nth-child(2), & span:nth-child(3)': {
      top: 8,
      transition: 'transform .15s ease 0s, background .1s linear 0s',
    },
    '& span:nth-child(4)': {
      top: 16,
    },
  },
  active: {
    '& span:nth-child(1), & span:nth-child(4)': {
      top: 8,
      opacity: 0,
      transition: 'all .3s ease 0s',
    },
    '& span:nth-child(2), & span:nth-child(3)': {
      background: theme.palette.secondary.main,
      transition: 'transform .15s ease .3s, background .1s linear .15s',
    },
    '& span:nth-child(2)': {
      transform: 'rotate(45deg)',
    },
    '& span:nth-child(3)': {
      transform: 'rotate(-45deg)',
    },
  },
}));

interface HamburgerProps {
  onClick: () => void;
  state: boolean;
  className?: string;
}

const Hamburger: FunctionComponent<HamburgerProps> = function Hamburger({
  onClick,
  state,
  className,
}) {
  const { classes } = useStyles();

  return (
    <IconButton
      className={`${classes.root} ${state ? classes.active : ''} ${className}`}
      aria-label="menu"
      onClick={onClick}
    >
      <span />
      <span />
      <span />
      <span />
    </IconButton>
  );
};

export default Hamburger;
