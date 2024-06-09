
import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';

const About = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          About Page
        </Typography>
        <Typography variant="body1">
          This is the About Page.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default About;
