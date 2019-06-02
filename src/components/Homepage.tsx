import React, { FunctionComponent, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Button } from '@material-ui/core';
import { Logo, logoSizes } from './Logo';

const useStyles = makeStyles(() => ({
    root: {
        margin: 16
    }
}), {
    classNamePrefix: 'homepage',
});

export const Homepage: FunctionComponent = () => {
    const classes = useStyles();
    
    const [logoSize, setLogoSize] = useState(2.5);
    
    function onTestClick(){
        setLogoSize(0.5);    
    }

    return (
        <div className={classes.root}>
            <Typography>Homepage</Typography>
            <Button variant="contained" onClick={() => onTestClick()}>Test</Button> 
            <Logo size={`${logoSize}rem`} />
        </div>
    );
};