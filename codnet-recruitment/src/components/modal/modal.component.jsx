import React from "react";

import { ModalBox, ModalContainer, CloseButton } from "./modal.styles";
import Typography from "../typography/typography.component";

const Modal = (props) => {
  return (
    <ModalContainer onClick={props.handleOpen}>
      <ModalBox>
        <CloseButton onClick={props.handleOpen}></CloseButton>
        <Typography type="h2">{props.h2}</Typography>
        <Typography type="p">
          {props.p}
        </Typography>
      </ModalBox>
    </ModalContainer>
  );
};

export default Modal;
