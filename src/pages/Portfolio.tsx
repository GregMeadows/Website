import React, { FunctionComponent } from 'react';
import { Typography, Divider, makeStyles, Box } from '@material-ui/core';
import { PortfolioCard } from '../components/PortfolioCard';
import reactImage from '../images/reactCode.jpg'
import twitterProject from '../images/twitterProject.jpg'

const useStyles = makeStyles(({
    divider: {
        marginTop: '1rem',
        marginBottom: '2rem',
    }
}), {
    classNamePrefix: 'divider',
});

export const Portfolio: FunctionComponent = () => {
    const classes = useStyles();

    return (
        <section>
            <Typography variant="h1">My Work</Typography>
            <Divider className={classes.divider} />

            <Box display="flex" flexWrap="wrap" justifyContent="space-evenly">
                <PortfolioCard
                    title="This Website"
                    bodyText="Built using React"
                    imageURL={reactImage}
                />
            
                <PortfolioCard
                    title="Twitter Sentiment Analysis"
                    bodyText="Built with Java."
                    imageURL={twitterProject}
                />
            </Box>

        </section>
    );
};