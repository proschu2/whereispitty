import React, { FC } from 'react';
import Dialog from '@mui/material/Dialog';
import { location } from '../data/location';
import DialogActions from '@mui/material/DialogActions';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Info from './info';
const Detail: FC<{
  props: location;
  open: boolean;
  closeModal: () => void;
}> = ({ props, open, closeModal }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Dialog
      PaperProps={{
        sx: {
          width: fullScreen ? '100%' : '50%',
          maxHeight: fullScreen ? '100%' : '80vh',
        },
      }}
      open={open}
      onClose={closeModal}
      fullWidth
      maxWidth={'md'}
      fullScreen={fullScreen}
    >
      <Info loc={props} />
      {fullScreen && (
        <DialogActions>
          <IconButton onClick={closeModal}>
            <CloseRoundedIcon color="error" />
          </IconButton>
        </DialogActions>
      )}
    </Dialog>
  );
};

export default Detail;
