import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  background: {
    background: theme.palette.background.default,
  },
}));

export interface NavMotionWrapperProps {
  children?: React.ReactElement;
  in: boolean;
  onEnter?: () => void;
  onExited?: () => void;
}

const NavMotionWrapper = React.forwardRef<
  HTMLDivElement,
  NavMotionWrapperProps
>(({ in: open, onEnter, onExited, children }, ref) => {
  const { classes } = useStyles();

  const backgroundVariants = {
    in: {
      clipPath: `circle(150% at 40px 40px)`,
      transition: {
        type: 'spring',
        stiffness: 25,
        restDelta: 2,
      },
    },
    out: {
      clipPath: 'circle(0% at 40px 40px)',
      transition: {
        delay: 0.2,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const handleAnimationStart = (definition: string) => {
    if (definition === 'in' && onEnter) {
      onEnter();
    }
  };

  const handleAnimationComplete = (definition: string) => {
    if (definition === 'out' && onExited) {
      onExited();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.nav
          ref={ref}
          key="navMotionWrapper"
          className={classes.background}
          variants={backgroundVariants}
          initial="out"
          animate="in"
          exit="out"
          onAnimationStart={handleAnimationStart}
          onAnimationComplete={handleAnimationComplete}
          tabIndex={-1}
        >
          {children}
        </motion.nav>
      )}
    </AnimatePresence>
  );
});

export default NavMotionWrapper;
