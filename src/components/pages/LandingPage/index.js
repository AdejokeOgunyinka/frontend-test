import React from "react";
import Navbar from "../../molecules/Navbar";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import PartnerImage from "../../../assets/partners.svg";
import { PartnerSection } from "./style";
import InfoSection from "../../organisms/InfoSection";
import WomanWithAwardImage from "../../../assets/woman1-up-gaze.svg";
import WomanWithBookimage from "../../../assets/woman2-peering-book.svg";
import AstronautImage from "../../../assets/astronaut.svg";
import ManWithBellImage from "../../../assets/man-with-bell.svg";
import AssetSection from "../../organisms/AssetSection";

const LandingPage = () => {
  const infoDetails = [
    {
      header: "Invest your money in dollars",
      description:
        "By holding your investments in a stable currency, your money grows more over time and retains its value better.",
      image: WomanWithAwardImage,
    },
    {
      header: "Choose what's best for you",
      description:
        "Unlike other platforms, Rise lets you pick between stocks, US real estate and fixed income, according to your risk appetite. That way you can spread your risk and tap into different investments all in one place. ",
      image: WomanWithBookimage,
    },
    {
      header: "Set goals and reach them",
      description:
        "You can invest towards a goal on Rise--retirement, higher education, save for your home or travel budgets. Or create a goal of your own and invest periodically to achieve them. ",
      image: AstronautImage,
    },
    {
      header: "We remember so you dont have to",
      description:
        "Our Auto-invest feature makes it easy to stay consistent, even when you forget. Set a funding amount, frequency and payment method and Rise will automatically fund your investment, on schedule. ",
      image: ManWithBellImage,
    },
  ];

  return (
    <>
      <Navbar />
      <Header />
      <PartnerSection>
        <img src={PartnerImage} alt="partners" className="partner-image" />
      </PartnerSection>
      {infoDetails.map((info, index) => (
        <InfoSection
          header={info.header}
          key={index}
          description={info.description}
          imageSrc={info.image}
          flexDirection={(index + 1) % 2 === 0 && "row-reverse"}
        />
      ))}
      <AssetSection />
      <Footer />
    </>
  );
};

export default LandingPage;
