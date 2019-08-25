import React, { FunctionComponent } from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Homepage: FunctionComponent = () => {

    return (
        <section>
            <Typography variant='h1'>Hello</Typography>
            <Typography variant='body1'>
                Welcome to my website, here you can find out <Link to="/about">who I am</Link>,
                and see <Link to="/portfolio">examples of my work</Link>. 
            </Typography>
        </section>
    );
};