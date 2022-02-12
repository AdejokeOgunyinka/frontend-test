import React from "react";
import { AppSavingSectionContainer } from "./style";
import PhoneSavingsIcon from "../../../assets/phone-rise-app.webp";
import Button from "../../atoms/Button";

const AppSavingsSection = () => {
  return (
    <AppSavingSectionContainer>
      <img
        src={PhoneSavingsIcon}
        alt="Savings App"
        className="app-savings-section__image"
      />
      <div className="app-savings-section__container">
        <h4 className="app-savings-section__container__title">The Rise App</h4>
        <h1 className="app-savings-section__container__header">
          Save for your{" "}
          <h1 className="app-savings-section__container__header__inner">
            future
          </h1>
        </h1>
        <h5 className="app-savings-section__container__text">
          With Rise, you achieve your financial goals faster. Save for school,
          your home, vacations, your children's future and more.
        </h5>
        <Button bgColor="#07969E" text="Start Saving" textColor="#fff" />
      </div>
    </AppSavingSectionContainer>
  );
};

export default AppSavingsSection;
