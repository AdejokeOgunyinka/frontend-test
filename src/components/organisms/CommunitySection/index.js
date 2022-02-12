import React from "react";
import { CommunitySectionContainer } from "./style";
import CommunitySectionImage from "../../../assets/rise-community.webp";
import Button from "../../atoms/Button";

const CommunitySection = () => {
  return (
    <CommunitySectionContainer>
      <div className="community">
        <h1 className="community__header">Join The Rise Community</h1>
        <h4 className="community__description">
          If you want to go far, go together. Our Telegram community surrounds
          you with others who can help you along your financial journey with
          tips, support, advice and learning. It's completely free and open to
          new and seasoned investors.
        </h4>
        <Button
          bgColor="#A0DDE2"
          text="Join our community"
          textColor="#2D2D2D"
        />
      </div>
      <img
        src={CommunitySectionImage}
        alt="Community"
        className="community__image"
      />
    </CommunitySectionContainer>
  );
};

export default CommunitySection;
