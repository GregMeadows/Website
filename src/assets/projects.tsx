import { Typography } from '@mui/material';
import React, { ReactFragment } from 'react';
import imgReact from '../images/reactCode.jpg';
import imgTwitterProject from '../images/twitterProject.jpg';
import imgVRE from '../images/vre.jpg';

export interface Project {
  name: string;
  info: ReactFragment;
  imgLink: string;
  tags: string[];
  openSource?: string;
}

export const projects: Project[] = [
  {
    name: 'Personal Website',
    info: (
      <>
        <Typography variant="body1">
          This site was created to give me a platform to showcase the work I
          have done, but ended up as more as a project itself.
        </Typography>
        <Typography variant="body1">
          Written in Typescript, and built up using React. The site ended up
          being a great way to play around with new libraries and expore new
          ideas. Such as the animation using Framer Motion, or the material
          design based on mui.
        </Typography>
        <Typography variant="body1">
          The site makes use of Netlify to build straight from GitHub, and
          utilises Netlify&apos;s form capture feature, allowing for a
          completely serverless site.
        </Typography>
        <Typography variant="body1">
          I have greatly enjoyed working with these new technologies, and will
          continue to add the site as I learn.
        </Typography>
      </>
    ),
    imgLink: imgReact,
    tags: ['React', 'TypeScript', 'HTML', 'CSS'],
    openSource: 'GregMeadows.uk',
  },
  {
    name: 'Twitter Sentiment Analysis',
    info: (
      <>
        <Typography variant="body1">
          This was a Java based desktop application, developed as part of my
          university dissertation. It&apos;s goal was to analyse a tweet, before
          being tweeted, and predict the sentiment response that they would
          receive.
        </Typography>
        <Typography variant="body1">
          The idea behind this was that Tweets can have a broad impact on
          businesses in our current society, such as affecting political
          results, stock prices, public opinion, and so on. Such a tool would
          aid in mitigating accidental poor publicity.
        </Typography>
        <Typography variant="body1">
          It achieved this by identifying the key words of the tweet, and then
          weighting each of them by analysing other tweets that are related to
          those terms. This would be summed to produce an overall score that the
          tweet may receive.
        </Typography>
        <Typography variant="body1">
          In practise this was not always practical, as divided opinions online
          meant that it was hard to properly weight some topics, to gauge a
          proper respone. Such as anything relating to politics.
        </Typography>
        <Typography variant="body1">
          This project involved using several different techniques and
          associating libraries. Such as Neural Networking libraries, H2
          Databasing, Java Threading, and using the Twitter API.
        </Typography>
      </>
    ),
    imgLink: imgTwitterProject,
    tags: ['Java', 'JavaFX', 'SQL'],
  },
  {
    name: 'Virtual Rehabilitation Environment',
    info: (
      <>
        <Typography variant="body1">
          This was a project between 4 of us, carried out as part of our
          masters.
        </Typography>
        <Typography variant="body1">
          We were tasked to create a virtual rehabilitation environment for
          patients with neurological conditions based at the Danesbury
          Neurological Centre, Welwyn.
        </Typography>
        <Typography variant="body1">
          The concept was to create a platform that could aid in the
          rehabilitation process, such as, to give reminders for physiotherapy,
          reminders for upcoming appointments, and track their overall progress.
        </Typography>
        <Typography variant="body1">
          The platfrom had to cater to users that could have a wide range of
          neurological conditions, and as such the UX decisions were vital. This
          resulted in a fairly simple design, with a large clean layout, and
          clear colour-coded pages. This did not make for the most impressive
          platform visually, but it achieved the goal of being navigable by the
          intended users.
        </Typography>
        <Typography variant="body1">
          Java was used to run the backend server, while Javascript was used for
          frontend functionality, using JSON service calls to communicate
          between the two.
        </Typography>
      </>
    ),
    imgLink: imgVRE,
    tags: ['Java', 'SQL', 'JavaScript', 'HTML', 'CSS'],
  },
];
