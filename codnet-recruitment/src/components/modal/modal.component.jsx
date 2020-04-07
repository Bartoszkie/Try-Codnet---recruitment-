import React from "react";

import { ModalBox, ModalContainer, CloseButton } from "./modal.styles";
import Typography from "../typography/typography.component";

const Modal = (props) => {
  return (
    <ModalContainer onClick={props.handleOpen}>
      <ModalBox>
        <CloseButton onClick={props.handleOpen}></CloseButton>
        <Typography type="h2">Coming Soon!</Typography>
        <Typography type="p">
          This module is in development process, stay tuned!
        </Typography>
      </ModalBox>
    </ModalContainer>
  );
};

export default Modal;
