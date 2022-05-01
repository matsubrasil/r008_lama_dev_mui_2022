import React, { useState } from 'react';
import {
  Box,
  createTheme,
  PaletteMode,
  Stack,
  ThemeProvider,
} from '@mui/material';
import { Add, Feed, Navbar, Rightbar, Sidebar } from './components';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  const darkTheme = createTheme({
    palette: { mode: mode },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack
          direction='row'
          spacing={{ xs: 0, sm: 2 }}
          justifyContent='space-between'
        >
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
