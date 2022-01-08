import GitHubIcon from '@mui/icons-material/GitHub';
import { Chip } from '@mui/material';
import React, { FunctionComponent } from 'react';

interface OpenSourceChipProps {
  repo: string;
}

const OpenSourceChip: FunctionComponent<OpenSourceChipProps> =
  function OpenSourceChip({ repo }) {
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

export default OpenSourceChip;
