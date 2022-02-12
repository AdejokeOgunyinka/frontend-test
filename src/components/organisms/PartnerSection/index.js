import React from "react";
import { PartnerSectionContainer } from "./style";
import ARMImage from "../../../assets/ARM.svg";
import WUImage from "../../../assets/WU.svg";
import TechStarsImage from "../../../assets/techstars.svg";
import VImage from "../../../assets/v.svg";

const PartnerSection = () => {
  return (
    <PartnerSectionContainer>
      <img src={ARMImage} alt="ARM" className="partners__arm" />
      <img src={WUImage} alt="WU" className="partners__wu" />
      <img src={TechStarsImage} alt="TechStars" className="partners__tstars" />
      <img src={VImage} alt="V" className="partners__vee" />
    </PartnerSectionContainer>
  );
};

export default PartnerSection;
