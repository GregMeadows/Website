import { Typography } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  root: {},
}));

const NotFound: FunctionComponent = function NotFound() {
  const { classes } = useStyles();
  return (
    <section className={classes.root}>
      <Typography>Page Not Found</Typography>
    </section>
  );
};

export default NotFound;
