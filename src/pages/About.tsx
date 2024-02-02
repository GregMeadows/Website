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
    clear: 'both',
    [theme.breakpoints.down('md')]: {
      float: 'none',
      maxWidth: '100%',
      margin: '0 0 1rem 0',
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
          alt="Me, wearing t-shirt and shorts, in front of an old Korean gate in South Korea."
          caption="Daereungwon Tomb Complex, Gyeongju, South Korea"
          maxWidth={600}
          className={classes.figure}
        />
        <Typography paragraph>
          I am a {age && ageString} software developer based in Leicester. I
          hold an MEng in Computer Science that I received from the University
          of Hertfordshire in 2018.
        </Typography>
        <Typography paragraph>
          I have always enjoyed programming. My first foray into programming was
          DOS commands and batch scripting. I loved the ability to carry out
          multiple tasks what seemed instantly (back on Windows XP) and with
          great precision. Pretty soon I was hooked, and quickly moved on to
          Visual Basic, which lead to object-oriented languages like C# and the
          .NET framework.
        </Typography>
        <Typography paragraph>
          Soon I discoverd WPF Forms, and my interest in building good user
          interfaces. This lead me down a split path, trying to create good
          looking user interfaces in both the desktop app environment (utilising
          Java/JavaFX), and the rapidly growing web app environment (using
          HTM/CSS, with JavaScript/JQuery/PHP to produce functionality). Though,
          the growing trend to move all apps to a web based environment made it
          clear where the market is heading.
        </Typography>
        <Typography paragraph>
          Now in a professional environment, I have found a love for Typescript,
          and especially frameworks like React (with hooks is even better). I
          find this mix ideal for small and large projects alike, and makes for
          easy collaboration across teams. I&apos;m a strong advocate for making
          things type-safe and modularised, allowing for greater reusability and
          maintenance.
        </Typography>
      </section>
      <section>
        <Typography variant="h1">Interests</Typography>
        <Typography paragraph>
          Staying on the techy side of things, I greatly enjoy technology in
          general. I like to get my hands on any new tech, and have built myself
          more than one PC.
        </Typography>
        <Typography paragraph>
          In my down time I like to game, especially with friends. I&apos;m a
          big fan of Escape From Tarkov, and occasionally like to torture myself
          with League of Legends.
        </Typography>
        <Typography paragraph>
          More recently I have picked up playing chess. I&apos;m not very good,
          but have enjoyed learning the different concepts and openings, and can
          only hope that I get better in time. I currently favour the London and
          Dutch Defence.
        </Typography>
        <Typography paragraph>
          As for staying active, I like a good game of 5-a-side football, and
          when possible I enjoy airsoft with my friends.
        </Typography>
      </section>
      <section>
        <Typography variant="h1">Aspirations</Typography>
        <AnimatedImage
          src={imgCanada}
          alt="A lake with a backdrop of mountains, with pine trees lining the right side, and scree slopes on the left"
          caption="Moraine Lake, Canada"
          maxWidth={600}
          className={classes.figure}
        />
        <Typography paragraph>
          Possibly my largest aspiration is to one day end up in Canada. I
          visited back in 2013, and instantly fell in love with the stunning
          scenery and welcoming people. I stayed in the Rocky Mountains, within
          Banff National Park, and it was the most serene place I have visited
          to date. Luckily, with the more recent prevelance of remote working,
          this doesn&apos;t seem too unrealistic.
        </Typography>
        <Typography paragraph>
          Aside from that, my dream car is an Aston Martin, either a Vantage or
          DB11 (I wouldn&apos;t be fussy). This is somewhat less likely than
          remote working from Canada, especially with the rise of electric cars,
          but I have always loved the design.
        </Typography>
      </section>
    </>
  );
};

export default About;
