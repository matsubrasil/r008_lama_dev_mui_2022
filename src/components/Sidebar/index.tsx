import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  PaletteMode,
  styled,
  Switch,
} from '@mui/material';
import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from '@mui/icons-material';

interface SidebarProps {
  mode: 'light' | 'dark';
  setMode: (mode: PaletteMode) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ setMode, mode }) => {
  const ListItemIconCustom = styled(ListItemIcon)(({ theme }) => ({
    minWidth: theme.spacing(4),
  }));

  return (
    <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position='fixed'>
        <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIconCustom>
                <Home />
              </ListItemIconCustom>
              <ListItemText primary='Homepage' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simple-list'>
              <ListItemIconCustom>
                <Article />
              </ListItemIconCustom>
              <ListItemText primary='Pages' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simple-list'>
              <ListItemIconCustom>
                <Group />
              </ListItemIconCustom>
              <ListItemText primary='Groups' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simple-list'>
              <ListItemIconCustom>
                <Storefront />
              </ListItemIconCustom>
              <ListItemText primary='Marketplace' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simple-list'>
              <ListItemIconCustom>
                <Person />
              </ListItemIconCustom>
              <ListItemText primary='Friends' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simple-list'>
              <ListItemIconCustom>
                <Settings />
              </ListItemIconCustom>
              <ListItemText primary='Settings' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simple-list'>
              <ListItemIconCustom>
                <AccountBox />
              </ListItemIconCustom>
              <ListItemText primary='Profile' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simple-list'>
              <ListItemIconCustom>
                <ModeNight />
              </ListItemIconCustom>
              <Switch
                onChange={(e) => setMode(mode === 'light' ? 'dark' : 'light')}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
