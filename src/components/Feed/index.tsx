import React from 'react';
import { Box } from '@mui/material';
import { Post } from '../Post';

export const Feed: React.FC = () => {
  return (
    <Box flex={4} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};
