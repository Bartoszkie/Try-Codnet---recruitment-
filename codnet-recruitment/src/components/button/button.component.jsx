import React from 'react';

import {ButtonContainer} from './button.styles';

const Button = (props) => {
    return(
        <ButtonContainer>
            {props.children}
        </ButtonContainer>
    );
}

export default Button;