import { Card, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import OpenSourceChip from 'components/OpenSourceChip';
import React, { FunctionComponent } from 'react';
import { makeStyles } from 'tss-react/mui';
import { Project, projects } from '../assets/projects';

const useStyles = makeStyles()((theme) => ({
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
}));

const Portfolio: FunctionComponent = function Portfolio() {
  const { classes } = useStyles();

  const projectsDOM = projects.map((project: Project) => (
    <Card elevation={2} className={classes.project} key={project.name}>
      <CardMedia className={classes.image} image={project.imgLink} />
      <CardContent>
        <Typography variant="h2">{project.name}</Typography>
        <div className={classes.chips}>
          {project.openSource && <OpenSourceChip repo={project.openSource} />}
          {project.tags.map((tag) => (
            <Chip size="small" label={tag} key={tag} />
          ))}
        </div>
        {project.info}
      </CardContent>
    </Card>
  ));

  return (
    <section>
      <Typography variant="h1">My Projects</Typography>
      <Typography variant="body1">
        These are projects that I have worked on in my personal time, or as part
        of university.
      </Typography>
      <section className={classes.projects}>{projectsDOM}</section>
    </section>
  );
};

export default Portfolio;
