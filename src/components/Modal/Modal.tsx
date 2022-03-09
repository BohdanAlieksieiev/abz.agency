import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

interface Props {
  title?: string;
  text?: string;
  isOpen: boolean;
  handleClose: () => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalComp: React.FC<Props> = ({ title, text, isOpen, handleClose }) => {
  return (
    <>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={style}>
          <h2 id="parent-modal-title">{title}</h2>
          <p id="parent-modal-description">{text}</p>
        </Box>
      </Modal>
    </>
  );
};

export default ModalComp;
