
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import Home from './pages/Home';
import About from './pages/About';
import Posts from './pages/Posts';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={10} md={8}>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Grid>
        </Grid>
      </Container>
    </Router>
  );
}

export default App;