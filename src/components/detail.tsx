import React, { FC } from "react";
import Dialog from "@mui/material/Dialog";
import { location } from "../data/location";
import Concert from "./concert";
import DialogActions from "@mui/material/DialogActions";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Unstable_Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Info from "./info";
const Detail: FC<{
  props: location;
  open: boolean;
  concert?: string;
  closeModal: () => void;
}> = ({ props, open, closeModal, concert }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Dialog
      PaperProps={{
        sx: {
          width: "50%",
          maxHeight: "80vh",
        },
      }}
      open={open}
      onClose={closeModal}
      fullWidth
      maxWidth={"md"}
      fullScreen={fullScreen}
    >
      <Info loc={props} concert={concert} />
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
