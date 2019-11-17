import React, { FunctionComponent } from 'react';
import { Typography, Divider, makeStyles, Box } from '@material-ui/core';
import { PortfolioCard } from '../components/PortfolioCard';
import imgReact from '../images/reactCode.jpg'
import imgTwitterProject from '../images/twitterProject.jpg'
import imgVRE from '../images/vre.jpg'

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
                    bodyText="A complete overhaul of the site, using the React framework and Typescript."
                    imageURL={imgReact}
                />
            
                <PortfolioCard
                    title="Twitter Sentiment Analysis"
                    bodyText="My final year dissertation project, to predict a tweet's sentiment response."
                    imageURL={imgTwitterProject}
                />
                
                <PortfolioCard
                    title="VRE"
                    bodyText="A team based university project to build a virtual rehabilitation environment."
                    imageURL={imgVRE}
                />
            </Box>

        </section>
    );
};