import React, { FunctionComponent } from 'react';
import { Chip, Avatar } from '@material-ui/core';
import gitHubIcon from '../images/GitHub-Mark-Light-32px.png';

export const OpenSourceChip: FunctionComponent<{
    repo: string;
}> = ({repo}) => {
    
    return (
        <Chip
            color="primary"
            size="small"
            component="a"
            href={`https://github.com/GregMeadows/${repo}`}
            target="_blank"
            label="Open Source"
            icon={<Avatar src={gitHubIcon} />}
            clickable 
        />
    );
};