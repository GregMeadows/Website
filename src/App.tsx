import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import AnimatedRoutes from 'components/AnimatedRoutes';
import React, { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/ScrollToTop';

const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

const App: FunctionComponent = function App() {
  return (
    <CacheProvider value={muiCache}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </BrowserRouter>
    </CacheProvider>
  );
};

export default App;
