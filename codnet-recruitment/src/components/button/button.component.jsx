import React from "react";

import { ButtonContainer } from "./button.styles";

const Button = (props) => {
  return (
    <ButtonContainer onClick={props.handleOpen} blue={props.blue}>
      {props.children}
    </ButtonContainer>
  );
};

export default Button;
