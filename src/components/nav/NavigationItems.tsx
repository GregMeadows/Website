import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';

interface NavigationItemsProps {
  className?: string;
}

const useStyles = makeStyles()((theme) => ({
  container: {
    '& > :not(div:last-of-type)': {
      paddingRight: '6%',
      borderRight: `1px solid ${theme.palette.divider}`,
      [theme.breakpoints.down('md')]: {
        paddingRight: '5%',
      },
      [theme.breakpoints.down('sm')]: {
        padding: 0,
        border: 'none',
      },
    },
    '& > :not(div:first-of-type)': {
      paddingLeft: '6%',
      [theme.breakpoints.down('md')]: {
        paddingLeft: '5%',
      },
      [theme.breakpoints.down('sm')]: {
        padding: 0,
      },
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: '1rem',
      flexDirection: 'column',
      alignSelf: 'flex-start',
    },
  },
  item: {
    marginTop: '2%',
    marginBottom: '2%',
    '& h2': {
      fontSize: '3rem',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '2rem',
      marginBottom: '2rem',
      '& h2': {
        fontSize: '2.5rem',
      },
      '& h6': {
        fontSize: '1rem',
      },
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '1%',
      marginBottom: '1%',
      width: '100%',
    },
  },
  link: {
    color: theme.palette.text.primary,
    textAlign: 'center',
    display: 'block',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '12%',
      textAlign: 'left',
      paddingTop: '4%',
      paddingBottom: '4%',
    },
  },
  icon: {
    marginBottom: '0.5rem',
    fontSize: '3rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
      marginRight: '1.8rem',
    },
  },
}));

const NavigationItems: FunctionComponent<NavigationItemsProps> =
  function NavigationItems({ className }) {
    const { classes, cx } = useStyles();

    const listVariants = {
      open: {
        transition: { staggerChildren: 0.08, delayChildren: 0.4 },
      },
      closed: {
        transition: { staggerChildren: 0.04 },
      },
    };

    const itemVariants = {
      open: {
        y: 0,
        opacity: 1,
        transition: {
          y: { stiffness: 50, velocity: -40 },
        },
      },
      closed: {
        y: -50,
        opacity: 0,
        transition: {
          y: { stiffness: 50 },
        },
      },
    };

    return (
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        className={cx(classes.container, className)}
        component={motion.div}
        variants={listVariants}
        initial="closed"
        animate="open"
        exit="closed"
        id="nav-description"
      >
        <Grid
          item
          className={classes.item}
          component={motion.div}
          variants={itemVariants}
        >
          <Link to="/about" className={classes.link}>
            <PersonPinIcon fontSize="inherit" className={classes.icon} />
            <div>
              <Typography variant="h2">About</Typography>
              <Typography variant="subtitle1">Who Am I?</Typography>
            </div>
          </Link>
        </Grid>
        <Grid
          item
          className={classes.item}
          component={motion.div}
          variants={itemVariants}
        >
          <Link to="/portfolio" className={classes.link}>
            <CodeRoundedIcon fontSize="inherit" className={classes.icon} />
            <div>
              <Typography variant="h2">Portfolio</Typography>
              <Typography variant="subtitle1">My Projects</Typography>
            </div>
          </Link>
        </Grid>
        <Grid
          item
          className={classes.item}
          component={motion.div}
          variants={itemVariants}
        >
          <Link to="/contact" className={classes.link}>
            <MessageRoundedIcon fontSize="inherit" className={classes.icon} />
            <div>
              <Typography variant="h2">Contact</Typography>
              <Typography variant="subtitle1">Say Hello</Typography>
            </div>
          </Link>
        </Grid>
      </Grid>
    );
  };

export default NavigationItems;
