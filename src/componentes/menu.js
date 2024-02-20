import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const AppMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, color: '#5D2A42' }}>
      <AppBar color='transparent' position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >

            <MenuItem onClick={handleClose}>
              <Link to="/">
                <Typography sx={{ color: '#5D2A42' }}>
                  Home
                </Typography>
              </Link>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <Link to="/livros">
                <Typography sx={{ color: '#5D2A42' }}>
                  Acervo
                </Typography>
              </Link>
            </MenuItem>

          </Menu>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#5D2A42' }}>
            <b>Virtual Library 2</b>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppMenu;