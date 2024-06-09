
import React, { useState } from 'react';
import { Typography, Card, CardContent, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const Contact = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Contact Page
          </Typography>
          <Typography variant="body1">
            This is the Contact Page.
          </Typography>
          <Button variant="contained" color="primary" onClick={handleClickOpen}>
            Open Contact Form
          </Button>
        </CardContent>
      </Card>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contact Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the contact form.
          </DialogContentText>
          {/* Here you can add form fields as needed */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Contact;
