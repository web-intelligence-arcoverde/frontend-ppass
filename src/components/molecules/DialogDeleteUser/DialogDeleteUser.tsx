'use client'

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import * as React from 'react';

interface IDialogDeleteUser {
  open: boolean;
  handleClickClose?: () => void;
}

export const DialogDeleteUser = ({
  open,
  handleClickClose,
}: IDialogDeleteUser) => {
  return (
    <Dialog
      open={open}
      onClose={handleClickClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClickClose}>Disagree</Button>
        <Button onClick={handleClickClose} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};
