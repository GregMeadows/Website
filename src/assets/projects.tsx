import { Typography } from '@mui/material';
import React, { ReactFragment } from 'react';
import imgReact from '../images/reactCode.jpg';
import imgTwitterProject from '../images/twitterProject.jpg';
import imgEnyoBackdrop from '../images/enyoBackdrop.jpg';

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
        <Typography paragraph>
          This site was created to give me a platform to showcase the work I
          have done, but ended up as more as a project itself.
        </Typography>
        <Typography paragraph>
          Written in Typescript, and built up using React. The site ended up
          being a great way to play around with new libraries and expore new
          ideas. Such as the animation using Framer Motion, or the material
          design based on mui.
        </Typography>
        <Typography paragraph>
          The site makes use of Netlify to build straight from GitHub, and
          utilises Netlify&apos;s form capture feature, allowing for a
          completely serverless site.
        </Typography>
        <Typography paragraph>
          I have greatly enjoyed working with these new technologies, and will
          continue to add the site as I learn.
        </Typography>
      </>
    ),
    imgLink: imgReact,
    tags: ['React', 'TypeScript', 'HTML', 'CSS'],
    openSource: 'Website',
  },
  {
    name: 'Twitter Sentiment Analysis',
    info: (
      <>
        <Typography paragraph>
          This was a Java based desktop application, developed as part of my
          university dissertation. It&apos;s goal was to analyse a tweet, before
          being tweeted, and predict the sentiment response that they would
          receive.
        </Typography>
        <Typography paragraph>
          The idea behind this was that Tweets can have a broad impact on
          businesses in our current society, such as affecting political
          results, stock prices, public opinion, and so on. Such a tool would
          aid in mitigating accidental poor publicity.
        </Typography>
        <Typography paragraph>
          It achieved this by identifying the key words of the tweet, and then
          weighting each of them by analysing other tweets that are related to
          those terms. This would be summed to produce an overall score that the
          tweet may receive.
        </Typography>
        <Typography paragraph>
          In practise this was not always practical, as divided opinions online
          meant that it was hard to properly weight some topics, to gauge a
          proper respone. Such as anything relating to politics.
        </Typography>
        <Typography paragraph>
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
    name: 'Enyo Shop & Website',
    openSource: 'enyo',
    info: (
      <>
        <Typography paragraph>
          Enyo was a company that designed and manufactured unique premium
          esports performance apparel and merchandise for esports teams,
          streamers and individuals.
        </Typography>
        <Typography paragraph>
          The project entailed creating and maintaining a Shopify shop, in
          addition to a brand website.
        </Typography>
        <Typography paragraph>
          The shop side utilised the Shopify store front platform, using Liquid
          and CSS to create a branded store page. This was my first foray into
          Shopify and Liquid as a template language, so presented a lot of new
          experiences. While the language is fairly simple, it
        </Typography>
        <Typography paragraph>
          While the language is fairly simple, it is very reminicent of PHP due
          to the server side rendering. This was not dynamic enough for my
          liking, and made dynamic styling fairly difficult and obtuse.
        </Typography>
        <Typography paragraph>
          The brand website was written in Typescript using the React framework.
          This was far easier to work with than the store front, though posed a
          challenge when the two had to flow.
        </Typography>
        <Typography paragraph>
          The brand site was hosted on AWS, making use of several services,
          notably, Amplify, S3, and Route 53, in addition to a couple Lambda
          functions. This was very interesting to venture into, as I had only
          had brief exposure to AWS. Amplify provided a very easy CI/CD workflow
          which I was a fan of. While Route 53 allowed for complex domain/email
          routing rules, though felt like slight overkill for the simple use
          case.
        </Typography>
      </>
    ),
    imgLink: imgEnyoBackdrop,
    tags: ['React', 'Typescript', 'JavaScript', 'Liquid', 'HTML', 'CSS', 'AWS'],
  },
];
