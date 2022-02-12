import React from "react";
import { AssetCardContainer } from "./style";
import Link from "../../atoms/LinkWithArrow";

const AssetCard = ({ backgroundColor, image, header, description }) => {
  return (
    <AssetCardContainer backgroundColor={backgroundColor}>
      <span className="asset-card__top-box"></span>
      <div className="asset-card__image-container">
        <img
          src={image}
          alt="type"
          className="asset-card__image-container__img"
        />
      </div>
      <div className="asset-card__bottom-box">
        <h3 className="asset-card__bottom-box__header">{header}</h3>
        <p className="asset-card__bottom-box__description">{description}</p>
        <span>
          <p className="asset-card__bottom-box__left-text">
            Historical returns:
          </p>
          <p className="asset-card__bottom-box__right-text">14% per annum</p>
        </span>
        <span>
          <p className="asset-card__bottom-box__left-text">Risk Level:</p>
          <p className="asset-card__bottom-box__right-text">Medium</p>
        </span>
        <Link
          text="Learn how Stocks work"
          rightArrow
          className="asset-card__bottom-box__link"
        />
      </div>
    </AssetCardContainer>
  );
};

export default AssetCard;
