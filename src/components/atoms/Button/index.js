import React from "react";
import { ButtonElement } from "./style";

const Button = ({ bgColor, text, textColor }) => {
  return (
    <ButtonElement textColor={textColor} bgColor={bgColor}>
      {text}
    </ButtonElement>
  );
};

export default Button;
