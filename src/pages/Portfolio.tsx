import React, { FunctionComponent } from 'react';
import { Typography, makeStyles, Theme, Chip } from '@material-ui/core';
import imgReact from '../images/reactCode.jpg';
import imgTwitterProject from '../images/twitterProject.jpg';
import imgVRE from '../images/vre.jpg';
import { OpenSourceChip } from '../components/OpenSourceChip';

interface Project {
    name: string;
    info: string;
    imgLink: string;
    tags: string[];
    openSource?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    projects: {
        '& > :nth-child(odd)': {
            backgroundColor: theme.palette.background.highlight,
        }
    },
    section: {
        margin: 0,
        padding: '2rem',
        display: 'flex',
        '& > :first-child': {
            marginRight: '2rem',
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        marginTop: 0,
        '& > p': {
            flexGrow: 1,
        },
        [theme.breakpoints.down('sm')]: {
            order: 3,
            marginTop: '2rem',
            marginRight: 0,
        },
    },
    chips: {
        marginTop: '1rem',
        '& > *': {
            marginRight: '0.2rem',
        }
    },
    image: {
        display: 'flex',
        width: 550,
        [theme.breakpoints.down('sm')]: {
            order: 2,
        },
    },
}), {
    classNamePrefix: 'about',
});

export const Portfolio: FunctionComponent = () => {
    const classes = useStyles();

    const projects: Project[] = [
        {
            name: 'This Website',
            info: 'A complete overhaul of the site, using the React framework and Typescript.',
            imgLink: imgReact,
            tags: ['React', 'TypeScript', 'HTML', 'CSS'],
            openSource: 'GregMeadows.uk',
        }, {
            name: 'Twitter Sentiment Analysis',
            info: 'My final year dissertation project, to predict a tweet\'s sentiment response.',
            imgLink: imgTwitterProject,
            tags: ['Java', 'JavaFX'],
        }, {
            name: 'VRE',
            info: 'A team based university project to build a virtual rehabilitation environment.',
            imgLink: imgVRE,
            tags: ['Java', 'JavaScript', 'HTML', 'CSS'],
        },
    ];

    const projectsDOM = projects.map((project: Project) => {
        return (
            <section className={classes.section}>
                <div className={classes.info}>
                    <Typography variant="h3">{project.name}</Typography>
                    <Typography variant='body1'>{project.info}</Typography>
                    <div className={classes.chips}>
                        {project.openSource && (<OpenSourceChip repo={project.openSource} />)}
                        {project.tags.map(tag => {
                            return (<Chip size="small" label={tag} />);
                        })}
                    </div>
                </div>
                <img src={project.imgLink} alt={project.name} className={classes.image}/>
            </section>
        );
    });

    return (
        <section>
            <Typography variant="h1">Projects</Typography>
            <Typography variant='body1'>
                These are projects that I have worked on in my personal time, or as part of university.
            </Typography>
            <section className={classes.projects}>
                {projectsDOM}
            </section>
        </section>
    );
};