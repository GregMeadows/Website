import React, { ReactFragment } from 'react';
import imgReact from '../images/reactCode.jpg';
import imgTwitterProject from '../images/twitterProject.jpg';
import imgVRE from '../images/vre.jpg';
import { Typography } from '@material-ui/core';

export interface Project {
    name: string;
    info: ReactFragment;
    imgLink: string;
    tags: string[];
    openSource?: string;
}

export const projects: Project[] = [
    {
        name: 'This Website',
        info: (
            <>
                <Typography variant='body1'>A complete overhaul of the site, using the React framework and Typescript.</Typography>
            </>
        ),
        imgLink: imgReact,
        tags: ['React', 'TypeScript', 'HTML', 'CSS'],
        openSource: 'GregMeadows.uk',
    }, {
        name: 'Twitter Sentiment Analysis',
        info: (
            <>
                <Typography variant='body1'>My latest project was my final year dissertation.</Typography>
                <Typography variant='body1'>
                    This was a Java based desktop application, designed to analyse tweets (before they are tweeted) and predict the
                    sentiment response that they would receive.
                </Typography>
                <Typography variant='body1'>
                    This type of software could have multiple applications, such as within business enterprises, where they wish to
                    see the impact of the tweet before it is published.
                </Typography>
                <Typography variant='body1'>
                    Tweets can have a broad impact on businesses in current society, affecting sales and stock prices, such a tool
                    would aid in mitigating accidental poor publicity.
                </Typography>
                <Typography variant='body1'>
                    This project involved using several different techniques and associating libraries. Such as Neural
                    Networking libraries, H2 Databasing (with JDBC), Java Threading, and the Twitter API.
                </Typography>
                <Typography variant='body1'>The project was awarded a distinction, allowing me to finish university with a first class honours MEng.</Typography>
            </>
        ),
        imgLink: imgTwitterProject,
        tags: ['Java', 'JavaFX', 'SQL'],
    }, {
        name: 'VRE',
        info: (
            <>
                <Typography variant='body1'>This was a team based university project where I took the role of project lead.</Typography>
                <Typography variant='body1'>
                    We were tasked to create a virtual rehabilitation environment, for patients with neurological conditions
                    based at the Danesbury Neurological Centre, Welwyn.
                </Typography>
                <Typography variant='body1'>
                    Many UX considerations had to be made, to allow for a wide range of accessibility issues, the final
                    design can be seen to the right.
                </Typography>
                <Typography variant='body1'>
                    Java was used to run the backend server, while Javascript was used for frontend functionality, using
                    JSON to communicate between the two.
                </Typography>
                <Typography variant='body1'>The project was awarded a first, and was nominated for the University of Hertfordshire Flare Ignite award.</Typography>
            </>
        ),
        imgLink: imgVRE,
        tags: ['Java', 'SQL', 'JavaScript', 'HTML', 'CSS'],
    },
];