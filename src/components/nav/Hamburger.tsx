import { IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import React, { FunctionComponent } from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  button: {
    padding: 8,
  },
  icon: {
    height: 32,
    width: 32,
  },
  path: {
    strokeWidth: 3,
    stroke: theme.palette.primary.main,
    strokeLinecap: 'round',
  },
}));

interface HamburgerProps {
  onClick: () => void;
  open: boolean;
  className?: string;
}

const Hamburger: FunctionComponent<HamburgerProps> = function Hamburger({
  onClick,
  open,
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
      <motion.svg
        viewBox="0 0 22 19"
        className={classes.icon}
        initial={false}
        animate={open ? 'open' : 'closed'}
      >
        <motion.path
          className={classes.path}
          variants={{
            closed: {
              d: [
                'M 3 16.5 L 17 2.5',
                'M 2 9.423 L 20 9.423',
                'M 2 2.5 L 20 2.5',
              ],
            },
            open: {
              d: [
                'M 2 2.5 L 20 2.5',
                'M 2 9.423 L 20 9.423',
                'M 3 16.5 L 17 2.5',
              ],
            },
          }}
          transition={{ duration: 0.5 }}
        />
        <motion.path
          className={classes.path}
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ delay: 0.2, duration: 0.1 }}
        />
        <motion.path
          className={classes.path}
          variants={{
            closed: {
              d: [
                'M 3 2.5 L 17 16.346',
                'M 2 9.423 L 20 9.423',
                'M 2 16.346 L 20 16.346',
              ],
            },
            open: {
              d: [
                'M 2 16.346 L 20 16.346',
                'M 2 9.423 L 20 9.423',
                'M 3 2.5 L 17 16.346',
              ],
            },
          }}
          transition={{ duration: 0.5 }}
        />
      </motion.svg>
    </IconButton>
  );
};

export default Hamburger;
