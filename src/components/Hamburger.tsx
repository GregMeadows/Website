import { IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import React, { FunctionComponent } from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  button: {
    padding: '0.6rem',
  },
  icon: {
    height: '2rem',
    width: '2rem',
  },
  path: {
    strokeWidth: 3,
    stroke: theme.palette.primary.main,
    strokeLinecap: 'round',
  },
}));

interface HamburgerProps {
  onClick: () => void;
  className?: string;
}

const Hamburger: FunctionComponent<HamburgerProps> = function Hamburger({
  onClick,
  className,
}) {
  const { classes, cx } = useStyles();

  return (
    <IconButton
      className={cx(className, classes.button)}
      aria-label="menu"
      onClick={onClick}
      color="primary"
    >
      <svg viewBox="0 0 22 18" className={classes.icon}>
        <motion.path
          className={classes.path}
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <motion.path
          className={classes.path}
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <motion.path
          className={classes.path}
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </IconButton>
  );
};

export default Hamburger;
