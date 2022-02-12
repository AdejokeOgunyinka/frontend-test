import React from "react";
import { DownloadBtnContainer } from "./style";
import AppleIcon from "../../../assets/apple.svg";
import PlaystoreIcon from "../../../assets/playstore.webp";

const DownloadButton = ({ apple, className }) => {
  return (
    <DownloadBtnContainer className={className}>
      <img src={apple ? AppleIcon : PlaystoreIcon} alt="apple or playstore" />
      <div>
        <p>Download on the</p>
        <p>
          <b>{apple ? "App Store" : "Google Play"}</b>
        </p>
      </div>
    </DownloadBtnContainer>
  );
};

export default DownloadButton;
