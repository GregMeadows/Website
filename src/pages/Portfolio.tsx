import React, { FunctionComponent } from 'react';
import { Typography } from '@material-ui/core';
import { PortfolioCard } from '../components/PortfolioCard';

export const Portfolio: FunctionComponent = () => {

    return (
        <section>
            <Typography variant='h1'>My Work</Typography>
            <Typography variant='body1'>
                Here is some of my work.
            </Typography>
            <PortfolioCard
                title="React"
                bodyText="Used to build this website."
            />
        </section>
    );
};