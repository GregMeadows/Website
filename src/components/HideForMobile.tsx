import React, { FunctionComponent } from 'react';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

export const HideForMobile: FunctionComponent = ({children}) => {
    const theme = useTheme();
    const widthMobile = useMediaQuery(theme.breakpoints.down('xs'));
    
    return (
        <>{widthMobile || children}</>
    );
};