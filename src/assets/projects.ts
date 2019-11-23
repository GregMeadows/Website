import imgReact from '../images/reactCode.jpg';
import imgTwitterProject from '../images/twitterProject.jpg';
import imgVRE from '../images/vre.jpg';

export interface Project {
    name: string;
    info: string;
    imgLink: string;
    tags: string[];
    openSource?: string;
}

export const projects: Project[] = [
    {
        name: 'This Website',
        info: 'A complete overhaul of the site, using the React framework and Typescript.',
        imgLink: imgReact,
        tags: ['React', 'TypeScript', 'HTML', 'CSS'],
        openSource: 'GregMeadows.uk',
    }, {
        name: 'Twitter Sentiment Analysis',
        info: 'My final year dissertation project, to predict a tweet\'s sentiment response.',
        imgLink: imgTwitterProject,
        tags: ['Java', 'JavaFX'],
    }, {
        name: 'VRE',
        info: 'A team based university project to build a virtual rehabilitation environment.',
        imgLink: imgVRE,
        tags: ['Java', 'JavaScript', 'HTML', 'CSS'],
    },
];