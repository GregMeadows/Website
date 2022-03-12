import { Typography } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const NotFound: FunctionComponent = function NotFound() {
  return (
    <>
      <section>
        <Typography paragraph>This page could not be found.</Typography>
        <Typography>
          It might have moved, or the URL could be wrong. Please{' '}
          <Link to="/contact">let me know</Link> if ths is the case.
        </Typography>
      </section>
      <section>
        <Typography>
          <Link to="/">Head to the Homepage and explore</Link>
        </Typography>
      </section>
    </>
  );
};

export default NotFound;
