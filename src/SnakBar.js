import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Alert } from '@mui/material';

const SimpleSnackbar = ({
  message,
  severity = 'success',
  isOpen,
  setIsOpen,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsOpen(false);
  };
  // Renders a message

  React.useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const action = (
    <React.Fragment>
      <Button color='secondary' size='small' onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size='small'
        aria-label='close'
        color='inherit'
        onClick={handleClose}
      >
        <CloseIcon fontSize='small' />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      action={action}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};
export default SimpleSnackbar;
