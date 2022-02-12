import React from "react";
import { LinkContainer, LinkElement } from "./style";
import ArrowRight from "../../../assets/right-arrow.webp";
import ArrowDown from "../../../assets/down-arrow.svg";

const Link = ({ text, rightArrow, className }) => {
  return (
    <LinkContainer className={className}>
      <LinkElement>{text}</LinkElement>
      <img src={rightArrow ? ArrowRight : ArrowDown} alt="Arrow" />
    </LinkContainer>
  );
};

export default Link;
