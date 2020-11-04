import React, { FunctionComponent } from 'react';
import { Typography, makeStyles, Theme } from '@material-ui/core';
import imgCanada from '../images/canada.jpg';
import imgMe from '../images/me.jpg';
import { BREAKPOINT_TABLET } from '../assets/consts';

const useStyles = makeStyles((theme: Theme) => ({
    figure: {
        float: 'right',
        maxWidth: '50%',
        marginTop: 0,
        [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
            float: 'none',
            maxWidth: '100%',
            margin: 0,
        },
    },
}), {
    classNamePrefix: 'about',
});

export const About: FunctionComponent = () => {
    const classes = useStyles();

    function getAge(dateString: string) {
        var today = new Date();
        // Simple off-clock check
        if (today < new Date('2019-08-25')) return null;
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var monthCheck = today.getMonth() - birthDate.getMonth();
        if (monthCheck < 0 || (monthCheck === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    const age = getAge('1996-01-10');
    const ageString = age + ' year old';

    return (
        <>
            <section>
                <Typography variant='h1'>Who Am I</Typography>
                <figure className={classes.figure}>
                    <img src={imgMe} alt="Me in Amsterdam, Netherlands." />
                    <figcaption>Me in Amsterdam, Netherlands.</figcaption>
                </figure>
                <Typography variant='body1'>
                    I am a {age && ageString} software developer based in Leicester, currently working for i-nexus, in Coventry, UK.
                    I hold an MEng in Computer Science, which i completed at the University of Hertfordshire in 2018.
                </Typography>
                <Typography variant='body1'>
                    I have always enjoyed programming, starting with DOS commands and batch scripting to automate simple tasks,
                    leading to basic Windows programming using vbs scripts. This in turn lead to  a range of object-oriented languages,
                    such as Visual Basic, and eventually to C#, the .NET framework/WPF Forms, Python, and finally Java/JavaFX and Android development. 
                    Additionally, I like web development and by extension front-end design, learning languages such as HTML/CSS, JavaScript/JQuery, PHP,
                    and more recently found a love for the React library and Typescript.
                </Typography>
            </section>
            <section>
                <Typography variant='h1'>Interests</Typography>
                <figure className={classes.figure}>
                    <img src={imgCanada} alt="Moraine Lake, Canada" />
                    <figcaption>Moraine Lake, Canada.</figcaption>
                </figure>
                <Typography variant='body1'>
                    Staying on the techy side of things, I enjoy technology in general, I build my own PC, and enjoy getting my hands on
                    any new tech.
                    In my down time I also like to game. I'm a big fan of the ARMA series, and have recently been playing 'The Outer Worlds'.
                </Typography>
                <Typography variant='body1'>
                    As for staying active, I like a good game of 5-a-side football, and when possible I'm keen to go surfing
                    (though living in Leicester can make this pretty difficult).
                </Typography>
            </section>
            <section>
                <Typography variant='h1'>Aspirations</Typography>
                <Typography variant='body1'>
                    An aspiration of mine is to one day end up in Canada. I visited in 2013 and instantly fell in love with the stunning scenery
                    and welcoming people. I stayed in the Rocky Mountains within Banff National Park, and it was the most serene place I have
                    visited to date.
                </Typography>
                <Typography variant='body1'>
                    My dream car is an Aston Martin, either a Vantage or DB11.
                </Typography>                
            </section>
        </>
    );
};