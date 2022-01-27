import { AnimatePresence } from 'framer-motion';
import About from 'pages/About';
import Contact from 'pages/Contact';
import Homepage from 'pages/Homepage';
import NotFound from 'pages/NotFound';
import Portfolio from 'pages/Portfolio';
import React, { FunctionComponent } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AnimatedWrapper from './AnimatedWrapper';
import Header from './layout/Header';

const AnimatedRoutes: FunctionComponent = function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route element={<AnimatedWrapper />}>
          <Route path="/" element={<Homepage />} />
          <Route element={<Header />}>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
