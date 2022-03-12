import { Chip, Grid, Typography } from '@mui/material';
import XPLists, { XPItem } from 'assets/xp';
import Portfolio from 'components/Portfolio';
import React, { FunctionComponent } from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  title: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.6rem',
  },
  icon: {
    fontSize: '2.2rem',
    marginRight: '0.5rem',
  },
  logos: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
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
  skills: {
    marginBottom: '8rem',
    [theme.breakpoints.down('md')]: {
      marginBottom: '6rem',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '4rem',
    },
  },
}));

const Experience: FunctionComponent = function Experience() {
  const { classes } = useStyles();

  const logos: XPItem[] = [];

  const xpLists = XPLists.map((xpList) => (
    <Grid item key={xpList.title} xs>
      <div className={classes.title}>
        {React.cloneElement(xpList.icon, {
          className: classes.icon,
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
      <section className={classes.skills}>
        <Typography variant="h1">Experience &amp; Skills</Typography>
        <Typography variant="body1">
          Languages, frameworks, and technologies that I have used.
        </Typography>
        <section>
          <Grid container spacing={6}>
            <Grid container item spacing={6} xs={12} lg={6}>
              {xpLists}
            </Grid>
            <Grid item className={classes.logos} xs={12} lg={6}>
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
      </section>
      <Portfolio />
    </>
  );
};

export default Experience;
