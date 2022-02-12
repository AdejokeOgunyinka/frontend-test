import React from "react";
import { HeaderContainer } from "./style";
import DownloadButtons from "../../molecules/DownloadButtons";
import PhoneImage from "../../../assets/Phone.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="inner">
        <h1>Dollar investments that help you grow</h1>
        <h4>
          We put your money in high quality assets that help you build wealth
          and achieve your financial goals
        </h4>
        <DownloadButtons />
      </div>
      <img src={PhoneImage} alt="phone" className="phone" />

      <div className="bubble x1"></div>
      <div className="bubble x2"></div>
      <div className="bubble x3"></div>
      <div className="bubble x3"></div>
      <div className="bubble x4"></div>
    </HeaderContainer>
  );
};

export default Header;
