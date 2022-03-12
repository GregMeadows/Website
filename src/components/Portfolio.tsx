import { Card, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import OpenSourceChip from 'components/OpenSourceChip';
import { motion } from 'framer-motion';
import React, { FunctionComponent } from 'react';
import { makeStyles } from 'tss-react/mui';
import { Project, projects } from 'assets/projects';

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
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

const Portfolio: FunctionComponent = function Portfolio() {
  const { classes } = useStyles();

  const containerVariants = {
    in: {
      transition: { staggerChildren: 0.1, delayChildren: 0.4 },
    },
    out: {
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    in: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 20, velocity: -20 },
      },
    },
    out: {
      y: -80,
      opacity: 0,
      transition: {
        y: { stiffness: 20 },
      },
    },
  };

  const projectsDOM = projects.map((project: Project) => (
    <Card
      variant="outlined"
      className={classes.project}
      key={project.name}
      component={motion.div}
      variants={itemVariants}
    >
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
      <Typography variant="h1">Notable Projects</Typography>
      <Typography variant="body1">
        Some projects that I have worked on.
      </Typography>
      <motion.section
        className={classes.projects}
        variants={containerVariants}
        initial="out"
        animate="in"
        exit="out"
      >
        {projectsDOM}
      </motion.section>
    </section>
  );
};

export default Portfolio;
