import React from "react";
import { FooterContainer } from "./style";
import RiseDarkLogo from "../../../assets/black-logo.svg";
import FooterLink from "../../atoms/FooterLink";

const Footer = () => {
  const firstFooterSection = {
    links: [
      { name: "About Us", link: "" },
      { name: "Careers", link: "" },
      { name: "FAQs", link: "" },
      { name: "Contact Info", link: "" },
      { name: "Press", link: "" },
      { name: "Rise Impact", link: "" },
    ],
  };

  const secondFooterSection = {
    header: "Explore",
    links: [
      { name: "Investment Club", link: "" },
      { name: "Blog", link: "" },
    ],
  };

  const thirdFooterSection = {
    header: "Products",
    links: [
      { name: "Rise App", link: "" },
      { name: "Wallets", link: "" },
      { name: "Asset Classes", link: "" },
    ],
  };

  const fourthFooterSection = {
    header: "Contact Us",
    links: [
      { name: "0818 714 7405", link: "" },
      { name: "hello@rise.capital", link: "" },
      { name: "Newsletter", link: "" },
      { name: "Instagram", link: "" },
      { name: "Twitter", link: "" },
    ],
  };

  return (
    <FooterContainer>
      <section>
        <img src={RiseDarkLogo} alt="rise logo" className="logo" />
        {firstFooterSection.links.map((link, index) => (
          <FooterLink linkText={link.name} key={index} />
        ))}
      </section>
      <section>
        <h4>{secondFooterSection.header}</h4>
        {secondFooterSection.links.map((link, index) => (
          <FooterLink linkText={link.name} key={index} withArrow />
        ))}
      </section>
      <section>
        <h4>{thirdFooterSection.header}</h4>
        {thirdFooterSection.links.map((link, index) => (
          <FooterLink linkText={link.name} key={index} />
        ))}
      </section>
      <section>
        <h4>{fourthFooterSection.header}</h4>
        {fourthFooterSection.links.map((link, index) => (
          <FooterLink linkText={link.name} key={index} withArrow />
        ))}
      </section>
    </FooterContainer>
  );
};

export default Footer;
