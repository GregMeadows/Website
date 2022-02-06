import { motion } from 'framer-motion';
import React, { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

const AnimatedWrapper: FunctionComponent = function AnimatedWrapper() {
  const variants = {
    in: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
    out: {
      opacity: 0,
      transition: {
        delay: 0.25,
      },
    },
  };

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={variants}
      transition={{ duration: 0.15 }}
    >
      <Outlet />
    </motion.div>
  );
};

export default AnimatedWrapper;
