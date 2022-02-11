import React from "react";
import { ButtonsContainer } from "./style";
import DownloadButton from "../../atoms/DownloadBtn";

const DownloadButtons = () => {
  return (
    <ButtonsContainer>
      <DownloadButton apple className="apple-download-btn" />
      <DownloadButton />
    </ButtonsContainer>
  );
};

export default DownloadButtons;
