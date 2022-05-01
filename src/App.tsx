import React from 'react';
import { Box, Stack } from '@mui/material';
import { Add, Feed, Navbar, Rightbar, Sidebar } from './components';

function App() {
  return (
    <Box>
      <Navbar />
      <Stack
        direction='row'
        spacing={{ xs: 0, sm: 2 }}
        justifyContent='space-between'
      >
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
  );
}

export default App;
