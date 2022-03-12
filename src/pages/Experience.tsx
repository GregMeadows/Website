import { Chip, Grid, Typography } from '@mui/material';
import XPLists, { XPItem } from 'assets/xp';
import Portfolio from 'components/Portfolio';
import { motion } from 'framer-motion';
import React, { FunctionComponent } from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  skills: {
    marginTop: '2rem',
    marginBottom: '8rem',
    [theme.breakpoints.down('md')]: {
      marginTop: '1rem',
      marginBottom: '6rem',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
      marginBottom: '4rem',
    },
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.6rem',
  },
  titleIcon: {
    fontSize: '2.2rem',
    marginRight: '0.5rem',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 0,
    [theme.breakpoints.down('lg')]: {
      marginTop: '1rem',
    },
  },
  logo: {
    height: '3.6rem',
    margin: '1.4rem',
    [theme.breakpoints.down('md')]: {
      height: '2.8rem',
      margin: '1.2rem',
    },
    [theme.breakpoints.down('sm')]: {
      height: '2.4rem',
      margin: '0.8rem',
    },
  },
  chip: {
    marginTop: '0.6rem',
    marginRight: '0.4rem',
    [theme.breakpoints.down('md')]: {
      marginTop: '0.5rem',
      marginRight: '0.3rem',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '0.4rem',
      marginRight: '0.2rem',
    },
  },
}));

const Experience: FunctionComponent = function Experience() {
  const { classes } = useStyles();

  const containerVariants = {
    in: {
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
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
      y: -60,
      opacity: 0,
      transition: {
        y: { stiffness: 20 },
      },
    },
  };

  const logos: XPItem[] = [];

  const xpLists = XPLists.map((xpList) => (
    <Grid
      item
      key={xpList.title}
      xs
      component={motion.div}
      variants={itemVariants}
    >
      <div className={classes.title}>
        {React.cloneElement(xpList.icon, {
          className: classes.titleIcon,
        })}
        <Typography variant="h2">{xpList.title}</Typography>
      </div>
      <div>
        {xpList.list.map((item) => {
          if (item.logo) {
            logos.push(item);
          }
          return (
            <Chip label={item.name} key={item.name} className={classes.chip} />
          );
        })}
      </div>
    </Grid>
  ));

  return (
    <>
      <section>
        <Typography variant="h1">Experience &amp; Skills</Typography>
        <Typography>
          Languages, frameworks, and technologies that I have used.
        </Typography>
        <Grid container spacing={6} className={classes.skills}>
          <Grid
            container
            item
            spacing={6}
            xs={12}
            lg={6}
            component={motion.div}
            variants={containerVariants}
            initial="out"
            animate="in"
            exit="out"
          >
            {xpLists}
          </Grid>
          <Grid item className={classes.logoContainer} xs={12} lg={6}>
            {logos.map((logo) => (
              <img
                key={logo.logoAlt}
                src={logo.logo}
                alt={logo.logoAlt}
                className={classes.logo}
              />
            ))}
          </Grid>
        </Grid>
      </section>
      <Portfolio />
    </>
  );
};

export default Experience;
