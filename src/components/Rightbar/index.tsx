import React from 'react';
import { Box } from '@mui/material';

export const Rightbar: React.FC = () => {
  return (
    <Box
      bgcolor='lightCoral'
      flex={2}
      p={2}
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      <Box position='fixed'>Right bar</Box>
    </Box>
  );
};
