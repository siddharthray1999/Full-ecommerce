import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import Registerform from "../Auth/Registerform";
import { useLocation } from "react-router-dom";
import Loginform from "../Auth/Loginform";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};
const Authmodal = ({ handleClose, open }) => {
  const location = useLocation();
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {location.pathname == "/login" ? <Loginform /> : <Registerform />}
        </Box>
      </Modal>
    </div>
  );
};

export default Authmodal;
