import { Typography } from '@mui/material';
import AnimatedImage from 'components/AnimatedImage';
import React, { FunctionComponent } from 'react';
import { makeStyles } from 'tss-react/mui';
import imgCanada from '../images/canada.jpg';
import imgMe from '../images/me.jpg';

const useStyles = makeStyles()((theme) => ({
  figure: {
    float: 'right',
    maxWidth: '50%',
    marginTop: 0,
    [theme.breakpoints.down('md')]: {
      float: 'none',
      maxWidth: '100%',
      margin: 0,
    },
  },
}));

const About: FunctionComponent = function About() {
  const { classes } = useStyles();

  function getAge(dateString: string) {
    const today = new Date();
    // Simple off-clock check
    if (today < new Date('2022-01-08')) return null;
    const birthDate = new Date(dateString);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthCheck = today.getMonth() - birthDate.getMonth();
    if (
      monthCheck < 0 ||
      (monthCheck === 0 && today.getDate() < birthDate.getDate())
    ) {
      return age - 1;
    }
    return age;
  }

  const age = getAge('1996-01-10');
  const ageString = `${age} year old`;

  return (
    <>
      <section>
        <Typography variant="h1">Who Am I</Typography>
        <AnimatedImage
          src={imgMe}
          alt="Me, wearing a blue jumper, standing on a canal bridge in Amsterdam."
          caption="Amsterdam, Netherlands"
          height={1000}
          width={1500}
          maxHeight={600}
          className={classes.figure}
        />
        <Typography variant="body1">
          I am a {age && ageString} software developer based in Leicester,
          currently working for i-nexus, in Coventry, UK. I hold an MEng in
          Computer Science, which i completed at the University of Hertfordshire
          in 2018.
        </Typography>
        <Typography variant="body1">
          I have always enjoyed programming, starting with DOS commands and
          batch scripting to automate simple tasks, leading to basic Windows
          programming using vbs scripts. This in turn lead to a range of
          object-oriented languages, such as Visual Basic, and eventually to C#,
          the .NET framework/WPF Forms, Python, and finally Java/JavaFX and
          Android development. Additionally, I like web development and by
          extension front-end design, learning languages such as HTML/CSS,
          JavaScript/JQuery, PHP, and more recently found a love for the React
          library and Typescript.
        </Typography>
      </section>
      <section>
        <Typography variant="h1">Interests</Typography>
        <AnimatedImage
          src={imgCanada}
          alt="A lake with a backdrop of mountains, with pine trees lining the right side"
          caption="Moraine Lake, Canada"
          height={1000}
          width={1500}
          maxHeight={600}
          className={classes.figure}
        />
        <Typography variant="body1">
          Staying on the techy side of things, I enjoy technology in general, I
          build my own PC, and enjoy getting my hands on any new tech. In my
          down time I also like to game. I&apos;m a big fan of the ARMA series,
          and have recently been playing &apos;The Outer Worlds&apos;.
        </Typography>
        <Typography variant="body1">
          As for staying active, I like a good game of 5-a-side football, and
          when possible I&apos;m keen to go surfing (though living in Leicester
          can make this pretty difficult).
        </Typography>
      </section>
      <section>
        <Typography variant="h1">Aspirations</Typography>
        <Typography variant="body1">
          An aspiration of mine is to one day end up in Canada. I visited in
          2013 and instantly fell in love with the stunning scenery and
          welcoming people. I stayed in the Rocky Mountains within Banff
          National Park, and it was the most serene place I have visited to
          date.
        </Typography>
        <Typography variant="body1">
          My dream car is an Aston Martin, either a Vantage or DB11.
        </Typography>
      </section>
    </>
  );
};

export default About;
