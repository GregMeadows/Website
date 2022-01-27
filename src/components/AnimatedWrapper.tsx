import { motion } from 'framer-motion';
import React, { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

const AnimatedWrapper: FunctionComponent = function AnimatedWrapper() {
  const variants = {
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  return (
    <motion.section
      initial="out"
      animate="in"
      exit="out"
      variants={variants}
      transition={{ duration: 0.2 }}
    >
      <Outlet />
    </motion.section>
  );
};

export default AnimatedWrapper;
