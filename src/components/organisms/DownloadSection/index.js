import React from "react";
import { DownloadSectionContainer } from "./style";
import PhoneImage from "../../../assets/Phone-bottom.webp";
import DownloadButtons from "../../molecules/DownloadButtons";

const DownloadSection = () => {
  return (
    <DownloadSectionContainer>
      <div className="download">
        <h5 className="download__link">Download The Rise App</h5>
        <h1 className="download__header">
          Join our 100,000 users investing and setting long term goals!
        </h1>
        <p className="download__description">
          Dollar investments that help you grow.
        </p>
        <DownloadButtons className="download__buttons" />
      </div>
      <img src={PhoneImage} alt="Smartphone" className="downloader" />
    </DownloadSectionContainer>
  );
};

export default DownloadSection;
