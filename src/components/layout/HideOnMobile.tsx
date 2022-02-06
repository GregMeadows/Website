import { useMediaQuery, useTheme } from '@mui/material';
import React, { FunctionComponent } from 'react';

const HideOnMobile: FunctionComponent = function HideOnMobile({ children }) {
  const theme = useTheme();
  const notMobileWidth = useMediaQuery(theme.breakpoints.up('sm'));

  if (notMobileWidth) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
  }
  return null;
};

export default HideOnMobile;
