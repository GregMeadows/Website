import React, { FunctionComponent } from 'react';
import { Typography, makeStyles, Theme, Chip, Card, CardContent, CardMedia } from '@material-ui/core';
import { OpenSourceChip } from '../components/OpenSourceChip';
import { Project, projects } from '../assets/projects';
import { Timeline } from '../components/Timeline';
import { workTimeline } from '../assets/workTimeline';

const useStyles = makeStyles((theme: Theme) => ({
    projects: {
        columnCount: 4,
        columnWidth: '30rem',
        columnGap: '1.6rem',
    },
    project: {
        breakInside: 'avoid-column',
        pageBreakInside: 'avoid',
        marginBottom: '2.2rem',
        backgroundColor: theme.palette.background.highlight,
    },
    chips: {
        marginTop: '0.5rem',
        marginBottom: '1rem',
        '& > *': {
            marginTop: '0.5rem',
            marginRight: '0.2rem',
        },
    },
    image: {
        height: 280,
    },
}), {
    classNamePrefix: 'about',
});

export const Portfolio: FunctionComponent = () => {
    const classes = useStyles();

    const projectsDOM = projects.map((project: Project) => {
        return (
            <Card elevation={2} className={classes.project} key={project.name}>
                <CardMedia
                    className={classes.image}
                    image={project.imgLink}
                />
                <CardContent>
                    <Typography variant="h2">
                        {project.name}
                    </Typography>
                    <div className={classes.chips}>
                        {project.openSource && (<OpenSourceChip repo={project.openSource} />)}
                        {project.tags.map(tag => {
                            return (<Chip size="small" label={tag} key={tag}/>);
                        })}
                    </div>
                    {project.info}
                </CardContent>
            </Card>
        );
    });

    return (
        <section>
            <Typography variant="h1">Professional Work</Typography>
            <Timeline items={workTimeline} />
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