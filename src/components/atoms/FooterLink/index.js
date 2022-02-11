import React from "react";
import { FooterLinkSpan, FooterText } from "./style";
import UpRightArrow from "../../../assets/up-right.svg";

const FooterLink = ({ linkText, link, withArrow }) => {
  return (
    <FooterLinkSpan>
      <FooterText href={link}>{linkText}</FooterText>
      {withArrow && <img src={UpRightArrow} alt="up-right arrow" />}
    </FooterLinkSpan>
  );
};

export default FooterLink;
