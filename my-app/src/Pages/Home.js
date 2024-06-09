
import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';

const Home = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Home Page
        </Typography>
        <Typography variant="body1">
          Welcome to the Home Page!
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Home;
