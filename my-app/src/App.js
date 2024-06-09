
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Posts from "./Pages/Posts";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Navbar from "./Pages/Navbar";

function App() {
  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              My SPA
            </Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/products">Posts</Button>
            <Button color="inherit" component={Link} to="/contact">Contact</Button>
            <Button color="inherit" component={Link} to="/contact">Projects</Button>
          </Toolbar>
        </AppBar>
        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/products" component={Posts} />
            <Route path="/contact" component={Contact} />
            <Route path="/contact" component={Projects} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;

