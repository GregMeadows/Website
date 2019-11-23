import React, { FunctionComponent } from 'react';
import { Typography, makeStyles, Theme, Chip } from '@material-ui/core';
import imgReact from '../images/reactCode.jpg';
import imgTwitterProject from '../images/twitterProject.jpg';
import imgVRE from '../images/vre.jpg';
import { OpenSourceChip } from '../components/OpenSourceChip';

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

    return (
        <section>
            <Typography variant="h1">Projects</Typography>
            <Typography variant='body1'>
                These are projects that I have worked on in my personal time, or as part of university.
            </Typography>
            <section className={classes.projects}>
                <section className={classes.section}>
                    <div className={classes.info}>
                        <Typography variant="h3">This Website</Typography>
                        <Typography variant='body1'>
                            A complete overhaul of the site, using the React framework and Typescript.
                        </Typography>
                        <div className={classes.chips}>
                            <OpenSourceChip repo='GregMeadows.uk' />
                            <Chip size="small" label="React" />
                            <Chip size="small" label="TypeScript" />
                            <Chip size="small" label="HTML" />
                            <Chip size="small" label="CSS" />
                        </div>
                    </div>
                    <img src={imgReact} alt="Code" className={classes.image}/>
                </section>
                <section className={classes.section}>
                    <img src={imgTwitterProject} alt="Code" className={classes.image}/>
                    <div className={classes.info}>
                        <Typography variant="h3">Twitter Sentiment Analysis</Typography>
                        <Typography variant='body1'>
                            My final year dissertation project, to predict a tweet's sentiment response.
                        </Typography>
                        <div className={classes.chips}>
                            <Chip size="small" label="Java" />
                            <Chip size="small" label="JavaFX" />
                        </div>
                    </div>
                </section>
                <section className={classes.section}>
                    <div className={classes.info}>
                        <Typography variant="h3">VRE</Typography>
                        <Typography variant='body1'>
                            A team based university project to build a virtual rehabilitation environment.
                        </Typography>
                        <div className={classes.chips}>
                            <Chip size="small" label="Java" />
                            <Chip size="small" label="JavaScript" />
                            <Chip size="small" label="HTML" />
                            <Chip size="small" label="CSS" />
                        </div>
                    </div>
                    <img src={imgVRE} alt="Code" className={classes.image}/>
                </section>
            </section>
        </section>
    );
};