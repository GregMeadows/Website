import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';

interface StyleProps {
  showIcons: boolean;
}

interface NavigationItemsProps {
  className?: string;
  showIcons?: boolean;
}

const useStyles = makeStyles<StyleProps>()((theme, { showIcons }) => ({
  container: {
    '& > :not(:last-child)': {
      paddingRight: '6%',
      borderRight: `1px solid ${theme.palette.divider}`,
      [theme.breakpoints.down(1000)]: {
        paddingRight: '5%',
      },
      [theme.breakpoints.down('sm')]: {
        padding: 0,
        margin: 0,
        border: 'none',
      },
    },
    '& > :not(:first-child)': {
      paddingLeft: '6%',
      [theme.breakpoints.down(1000)]: {
        paddingLeft: '5%',
      },
      [theme.breakpoints.down('sm')]: {
        padding: 0,
      },
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  item: {
    marginTop: '2%',
    marginBottom: '2%',
    '& h2': {
      fontSize: '3rem',
    },
    [theme.breakpoints.down(1000)]: {
      '& h2': {
        fontSize: '2.5rem',
      },
      '& h6': {
        fontSize: '1rem',
      },
    },
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      '& h2': {
        fontSize: '2rem',
      },
      '&:hover': {
        background: theme.palette.background.highlight,
      },
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
      paddingLeft: showIcons ? '2rem' : '4rem',
      paddingTop: '4%',
      textAlign: 'left',
      paddingBottom: '4%',
      borderBottom: `1px solid ${theme.palette.background.highlight}`,
      '&:hover': {
        color: theme.palette.text.primary,
      },
    },
  },
  icon: {
    marginBottom: '0.5rem',
    fontSize: '3rem',
    [theme.breakpoints.down(1000)]: {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
      marginRight: '1.8rem',
      fontSize: '2rem',
    },
  },
}));

const NavigationItems: FunctionComponent<NavigationItemsProps> =
  function NavigationItems({ className, showIcons }) {
    const styleProps: StyleProps = {
      showIcons: showIcons || false,
    };
    const { classes } = useStyles(styleProps);

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
        className={`${classes.container} ${className}`}
        component={motion.div}
        variants={listVariants}
      >
        <Grid
          item
          className={classes.item}
          component={motion.div}
          variants={itemVariants}
        >
          <Link to="/about" className={classes.link}>
            {showIcons && (
              <PersonPinIcon fontSize="inherit" className={classes.icon} />
            )}
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
            {showIcons && (
              <CodeRoundedIcon fontSize="inherit" className={classes.icon} />
            )}
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
            {showIcons && (
              <MessageRoundedIcon fontSize="inherit" className={classes.icon} />
            )}
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
