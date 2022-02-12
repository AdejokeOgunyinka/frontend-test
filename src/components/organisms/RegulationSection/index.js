import React from "react";
import { RegulationSectionContainer, CircleWithBlur } from "./style";

const RegulationSection = () => {
  return (
    <RegulationSectionContainer>
      <span className="regulation-section__left-section">
        <CircleWithBlur backgroundColor="#FFF4F0" />
        <CircleWithBlur backgroundColor="#F6E4F0" />
      </span>
      <span className="regulation-section__text-section">
        <h1 className="regulation-section__text-section__header">
          How we are Regulated
        </h1>
        <h4 className="regulation-section__text-section__description">
          Rise is registered and regulated both in the US and in Nigeria. Our
          team is made up of US registered investment advisers, our Nigerian
          users are covered by our SEC licensed trustees, ARM Trustees and all
          our assets are held with regulated third parties, in all relevant
          jurisdictions
        </h4>
      </span>
      <span className="regulation-section__right-section">
        <CircleWithBlur backgroundColor="#F6F2FF" />
        <CircleWithBlur backgroundColor="#ECFEFE" />
      </span>
    </RegulationSectionContainer>
  );
};

export default RegulationSection;
