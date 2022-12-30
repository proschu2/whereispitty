import React, { FC } from "react";
import Dialog from "@mui/material/Dialog";
import { location } from "../data/location";
import Concert from "./Concert";
import DialogActions from "@mui/material/DialogActions";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Unstable_Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
const Detail: FC<{
  props: location;
  open: boolean;
  closeModal: () => void;
}> = ({ props, open, closeModal }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Dialog
      open={open}
      onClose={closeModal}
      fullWidth
      maxWidth={"sm"}
      fullScreen={fullScreen}
    >
      <Grid container>
        <Grid xs={11} sm={12}>
          <Concert {...props} />
        </Grid>
        {fullScreen && (
          <Grid xs={1}>
            <DialogActions>
              <IconButton onClick={closeModal}>
                <CloseRoundedIcon color="error" />
              </IconButton>
            </DialogActions>
          </Grid>
        )}
      </Grid>
    </Dialog>
  );
};

export default Detail;
