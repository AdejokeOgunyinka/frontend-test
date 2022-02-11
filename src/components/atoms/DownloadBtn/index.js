import React from "react";
import { DownloadBtnContainer } from "./style";
import AppleIcon from "../../../assets/apple.svg";
import PlaystoreIcon from "../../../assets/playstore.svg";

const DownloadButton = ({ apple }) => {
  return (
    <DownloadBtnContainer>
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
