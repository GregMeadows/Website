import React, { FunctionComponent } from 'react';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { BREAKPOINT_MOBILE } from '../assets/consts';

export const HideOnMobile: FunctionComponent = ({children}) => {
    const theme = useTheme();
    const widthMobile = useMediaQuery(theme.breakpoints.down(BREAKPOINT_MOBILE));
    
    return (
        <>{widthMobile || children}</>
    );
};