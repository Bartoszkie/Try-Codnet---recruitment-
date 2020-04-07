import React from "react";

import { ModalBox, ModalContainer } from "./modal.styles";
import Typography from "../typography/typography.component";

const Modal = () => {
  return (
    <ModalContainer>
      <ModalBox>
        <Typography type="h3">Feaeture in building</Typography>
        <Typography type="p">
          This module is in development process, stay tuned!
        </Typography>
      </ModalBox>
    </ModalContainer>
  );
};

export default Modal;
