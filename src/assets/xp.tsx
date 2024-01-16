import CodeIcon from '@mui/icons-material/Code';
import ConstructionIcon from '@mui/icons-material/Construction';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import apolloLogo from 'images/logos/apollo.png';
import css3Logo from 'images/logos/css3.svg';
import cypressLogo from 'images/logos/cypress.svg';
import dockerLogo from 'images/logos/docker.png';
import dotnetLogo from 'images/logos/dotnet.svg';
import gitLogo from 'images/logos/git.png';
import gradleLogo from 'images/logos/gradle.svg';
import graphqlLogo from 'images/logos/graphql.svg';
import html5Logo from 'images/logos/html5.svg';
import i18nextLogo from 'images/logos/i18next.png';
import javascriptLogo from 'images/logos/javascript.svg';
import jestLogo from 'images/logos/jest.png';
import phpLogo from 'images/logos/php.svg';
import reactLogo from 'images/logos/react.svg';
import storybookLogo from 'images/logos/storybook.svg';
import teamcityLogo from 'images/logos/teamcity.svg';
import typescriptLogo from 'images/logos/typescript.svg';
import React from 'react';

interface XPList {
  title: string;
  icon: JSX.Element;
  list: XPItem[];
}

export interface XPItem {
  name: string;
  logo?: string;
  logoAlt?: string;
}

const languages: XPList = {
  title: 'Languages',
  icon: <CodeIcon />,
  list: [
    { name: 'TypeScript', logo: typescriptLogo, logoAlt: 'TypeScript Logo' },
    { name: 'JavaScript', logo: javascriptLogo, logoAlt: 'JavaScript Logo' },
    { name: 'HTML', logo: html5Logo, logoAlt: 'HTML5 Logo' },
    { name: 'CSS', logo: css3Logo, logoAlt: 'CSS3 Logo' },
    { name: 'GraphQL', logo: graphqlLogo, logoAlt: 'GraphQL Logo' },
    { name: 'Java' },
    { name: 'SQL' },
    { name: 'PHP', logo: phpLogo, logoAlt: 'PHP Logo' },
    { name: 'C#.NET', logo: dotnetLogo, logoAlt: 'Dot NET Logo' },
    { name: 'Liquid' },
  ],
};

const frameworks: XPList = {
  title: 'Frameworks',
  icon: <IntegrationInstructionsIcon />,
  list: [
    { name: 'React (Hooks)', logo: reactLogo, logoAlt: 'React Logo' },
    { name: 'Cypress', logo: cypressLogo, logoAlt: 'Cypress Logo' },
    { name: 'Jest', logo: jestLogo, logoAlt: 'Jest Logo' },
    { name: 'Apollo', logo: apolloLogo, logoAlt: 'Apollo Logo' },
    { name: 'i18next', logo: i18nextLogo, logoAlt: 'i18next Logo' },
    { name: 'JQuery' },
    { name: 'Java Spring' },
    { name: 'Java Hibernate  ' },
  ],
};

const technologies: XPList = {
  title: 'Technologies',
  icon: <ConstructionIcon />,
  list: [
    { name: 'GIT', logo: gitLogo, logoAlt: 'Git Logo' },
    { name: 'AWS' },
    { name: 'Netlify' },
    { name: 'Storybook', logo: storybookLogo, logoAlt: 'Storybook Logo' },
    { name: 'TeamCity', logo: teamcityLogo, logoAlt: 'TeamCity Logo' },
    { name: 'Gradle', logo: gradleLogo, logoAlt: 'Gradle Logo' },
    { name: 'Tomcat' },
    { name: 'Docker', logo: dockerLogo, logoAlt: 'Docker Logo' },
    { name: 'JIRA' },
    { name: 'Trello' },
  ],
};

export default [languages, frameworks, technologies];
