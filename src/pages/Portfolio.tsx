import React, { FunctionComponent } from 'react';
import { Typography, makeStyles, Theme, Chip } from '@material-ui/core';

import { OpenSourceChip } from '../components/OpenSourceChip';
import { Project, projects } from '../assets/projects';

const useStyles = makeStyles((theme: Theme) => ({
    projects: {
        '& > :nth-child(odd)': {
            backgroundColor: theme.palette.background.highlight,
            '& > div': {
                marginRight: '2rem',
            }
        },
        '& > :nth-child(even)': {
            '& > img': {
                order: 1,
                marginRight: '2rem',
            },
            '& > div': {
                order: 2,
            }
        },
    },
    section: {
        margin: 0,
        padding: '2rem',
        display: 'flex',
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
            order: 2,
            marginTop: '2rem',
            marginRight: 0,
        },
    },
    chips: {
        marginTop: '0.5rem',
        '& > *': {
            marginTop: '0.5rem',
            marginRight: '0.2rem',
        }
    },
    image: {
        display: 'flex',
        alignSelf: 'center',
        flexShrink: 0,
        width: 550,
        [theme.breakpoints.down('sm')]: {
            order: 1,
        },
    },
}), {
    classNamePrefix: 'about',
});

export const Portfolio: FunctionComponent = () => {
    const classes = useStyles();

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