import React, { ReactFragment } from 'react';
import imgReact from '../images/reactCode.jpg';
import imgTwitterProject from '../images/twitterProject.jpg';
import imgVRE from '../images/vre.jpg';

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
        info: 'A complete overhaul of the site, using the React framework and Typescript.',
        imgLink: imgReact,
        tags: ['React', 'TypeScript', 'HTML', 'CSS'],
        openSource: 'GregMeadows.uk',
    }, {
        name: 'Twitter Sentiment Analysis',
        info: (
            <>
                <p>My latest project was my final year dissertation.</p>
                <p>
                    This was a Java based desktop application, designed to analyse tweets (before they are tweeted) and predict the
                    sentiment response that they would receive.
                </p>
                <p>
                    This type of software could have multiple applications, such as within business enterprises, where they wish to
                    see the impact of the tweet before it is published.
                </p>
                <p>
                    Tweets can have a broad impact on businesses in current society, affecting sales and stock prices, such a tool
                    would aid in mitigating accidental poor publicity.
                </p>
                <p>
                    This project involved using several different techniques and associating libraries. Such as Neural
                    Networking libraries, H2 Databasing (with JDBC), Java Threading, and the Twitter API.
                </p>
                <p>The project was awarded a distinction, allowing me to finish university with a first class honours MEng.</p>
            </>
        ),
        imgLink: imgTwitterProject,
        tags: ['Java', 'JavaFX'],
    }, {
        name: 'VRE',
        info: (
            <>
                <p>This was a team based university project where I took the role of project lead.</p>
                <p>
                    We were tasked to create a virtual rehabilitation environment, for patients with neurological conditions
                    based at the Danesbury Neurological Centre, Welwyn.
                </p>
                <p>
                    Many UX considerations had to be made, to allow for a wide range of accessibility issues, the final
                    design can be seen to the right.
                </p>
                <p>
                    Java was used to run the backend server, while Javascript was used for frontend functionality, using
                    JSON to communicate between the two.
                </p>
                <p>The project was awarded a first, and was nominated for the University of Hertfordshire Flare Ignite award.</p>
            </>
        ),
        imgLink: imgVRE,
        tags: ['Java', 'JavaScript', 'HTML', 'CSS'],
    },
];