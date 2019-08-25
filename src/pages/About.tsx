import React, { FunctionComponent } from 'react';
import { Typography } from '@material-ui/core';

export const About: FunctionComponent = () => {
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
                <Typography variant='body1'>
                    I am a {age && ageString} software developer currently working at i-nexus, Coventry.
                    I hold an MEng in Computer Science, which i completed at the University of Hertfordshire in 2018.
                </Typography>
                <Typography variant='body1'>
                    I have always enjoyed programming, starting with DOS commands and batch scripting to automate simple tasks,
                    leading to basic Windows programming using vbs scripts. This in turn lead to  a range of object-oriented languages,
                    such as Visual Basic, and eventually to C#, the .NET framework/WPF Forms, Python, and finally Java/JavaFX and Android development. 
                </Typography>
                <Typography variant='body1'>
                    Additionally, I like web development and front-end design, learning languages such as HTML/CSS, JavaScript/JQuery, PHP,
                    and more recently found a love for the React library.
                </Typography>    
            </section>
            <section>
                <Typography variant='h1'>Interests</Typography>
                <Typography variant='body1'>
                    Staying on the techy side of things, I enjoy technology in general, I build my own PC, and enjoy getting my hands on
                    any new tech.
                    In my down time I also like to game. I'm a big fan of the ARMA series, and have recently been enjoying XCOM 2.
                    As for staying active, I like a good game of 5-a-side, and when possible I'm keen to go surfing
                    (though living in Leicester makes this difficult).
                </Typography>
            </section>
        </>
    );
};