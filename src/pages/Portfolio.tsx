import React, { FunctionComponent } from 'react';
import { Typography, makeStyles, Theme, Chip } from '@material-ui/core';

import { OpenSourceChip } from '../components/OpenSourceChip';
import { Project, projects } from '../assets/projects';

const useStyles = makeStyles((theme: Theme) => ({
    projects: {
        '& > :nth-child(odd)': {
            backgroundColor: theme.palette.background.highlight,
        },
        '& > :nth-child(even) > img': {
            float: 'left',
            marginRight: '2rem',
            marginLeft: 0,
            [theme.breakpoints.down('sm')]: {
                float: 'none',
                margin: '0 auto 2rem auto'
            },
        },
    },
    project: {
        margin: 0,
        padding: '2rem',
        paddingBottom: 0,
        overflow: 'auto',
    },
    chips: {
        marginTop: '0.5rem',
        marginBottom: '2rem',
        '& > *': {
            marginTop: '0.5rem',
            marginRight: '0.2rem',
        },
    },
    image: {
        width: 550,
        maxWidth: '50%',
        float: 'right',
        marginLeft: '2rem',
        marginBottom: '2rem',
        [theme.breakpoints.down('sm')]: {
            float: 'none',
            maxWidth: '100%',
            display: 'block',
            margin: '0 auto 2rem auto'
        },
    },
}), {
    classNamePrefix: 'about',
});

export const Portfolio: FunctionComponent = () => {
    const classes = useStyles();

    const projectsDOM = projects.map((project: Project) => {
        return (
            <section className={classes.project}>
                <img src={project.imgLink} alt={project.name} className={classes.image}/>
                <Typography variant="h3">{project.name}</Typography>
                <Typography variant='body1'>{project.info}</Typography>
                <div className={classes.chips}>
                    {project.openSource && (<OpenSourceChip repo={project.openSource} />)}
                    {project.tags.map(tag => {
                        return (<Chip size="small" label={tag} />);
                    })}
                </div>
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