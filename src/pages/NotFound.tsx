import { Typography } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const NotFound: FunctionComponent = function NotFound() {
  return (
    <>
      <section>
        <Typography variant="body1">This page could not be found.</Typography>
        <Typography variant="body1">
          It might have moved, or the URL could be wrong. Please{' '}
          <Link to="/contact">let me know</Link> if ths is the case.
        </Typography>
      </section>
      <section>
        <Typography variant="body1">
          <Link to="/">Head to the Homepage and explore</Link>
        </Typography>
      </section>
    </>
  );
};

export default NotFound;
