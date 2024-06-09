

import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';

const Posts = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Posts Page
        </Typography>
        <Typography variant="body1">
          This is the Posts Page.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Posts;
