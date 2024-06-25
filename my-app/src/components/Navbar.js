
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        </Typography>
        <Button color="inherit" component={Link} to="/home">KUCA</Button>
        <Button color="inherit" component={Link} to="/about">O</Button>
        <Button color="inherit" component={Link} to="/posts">POSTOVI</Button>
        <Button color="inherit" component={Link} to="/contact">KONTAKT</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
