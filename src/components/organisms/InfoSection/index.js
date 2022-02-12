import React from "react";
import { InfoSectionContainer } from "./style";
import Link from "../../atoms/LinkWithArrow";

const InfoSection = ({ header, description, imageSrc, flexDirection }) => {
  return (
    <InfoSectionContainer flexDirection={flexDirection}>
      <div className="info-section">
        <h3>{header}</h3>
        <h5>{description}</h5>
        <Link text="Start Investing now" rightArrow className="link" />
      </div>
      <img src={imageSrc} alt="respective display" className="image" />
    </InfoSectionContainer>
  );
};

export default InfoSection;
