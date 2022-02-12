import React from "react";
import { AssetSectionContainer } from "./style";
import StockIcon from "../../../assets/stocks.svg";
import RealEstateIcon from "../../../assets/real-estate.svg";
import FixedIncomeIcon from "../../../assets/fixed-income.svg";
import AssetCard from "../../molecules/AssetCard";

const AssetSection = () => {
  const assetInfo = [
    {
      header: "Stocks",
      description:
        "We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks.",
      image: StockIcon,
      bgColor: "#FFF4F0",
    },
    {
      header: "Real Estate",
      description:
        "Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.",
      image: RealEstateIcon,
      bgColor: "#F6F2FF",
    },
    {
      header: "Fixed Income",
      description:
        "A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency, i.e. the dollar. For people who want to protect their hard-earned money from inflation while earning steady returns.",
      image: FixedIncomeIcon,
      bgColor: "#ECFEFE",
    },
  ];

  return (
    <AssetSectionContainer>
      <h4 className="asset-section__header">Asset Classes</h4>
      <p className="asset-section__text">
        It's your money, choose where you invest it
      </p>
      <div className="asset-section__container">
        {assetInfo?.map((asset, index) => (
          <AssetCard
            key={index}
            backgroundColor={asset.bgColor}
            image={asset.image}
            header={asset.header}
            description={asset.description}
          />
        ))}
      </div>
    </AssetSectionContainer>
  );
};

export default AssetSection;
