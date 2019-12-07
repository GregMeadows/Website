import React, { FunctionComponent } from 'react';
import { Chip } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

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
            icon={<GitHubIcon />}
            clickable 
        />
    );
};