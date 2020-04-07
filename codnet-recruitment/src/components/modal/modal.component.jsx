import React, { useState, useRef } from "react";

import { ModalBox, ModalContainer, ButtonModal } from "./modal.styles";
import Typography from "../typography/typography.component";
import Button from "../button/button.component";

const Modal = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  return (
    <ModalContainer isOpen={isOpen}>
      <ModalBox>
        <ButtonModal onClick={() => setIsOpen(!isOpen)}>X</ButtonModal>
        <Typography type="h1">Feature in building</Typography>
        <Typography type="h2">
          This module is in development process, stay tuned!
        </Typography>
      </ModalBox>
    </ModalContainer>
  );
};

export default Modal;
