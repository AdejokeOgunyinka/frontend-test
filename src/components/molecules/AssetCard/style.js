import styled from "styled-components";

const AssetCardContainer = styled.div`
  border: 2px solid rgba(145, 159, 181, 0.2);
  border-radius: 5px;
  width: 18.7rem;
  height: 32.18rem;
  display: flex;
  flex-direction: column;
  position: relative;

  .asset-card {
    width: 100%;

    &__top-box {
      flex-basis: 25%;
      width: 100%;
      height: 100%;
      background-color: ${(props) => props.backgroundColor};
    }

    &__image-container {
      width: 8rem;
      height: 8rem;
      background-color: #fff;
      position: absolute;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 4.5rem;
      left: 5.5rem;

      &__img {
        width: 5.3rem;
        height: 5.3rem;
      }
    }

    &__bottom-box {
      flex-basis: 75%;
      padding: 0.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      &__header {
        font-family: "TomatoGroteskBold";
        font-style: normal;
        font-weight: 600;
        font-size: 1.5rem;
        color: #4a5050;
        margin: 0;
        margin-top: 4.5rem;
        text-align: center;
      }

      &__description,
      &__right-text,
      &__left-text {
        font-family: DM Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;
        text-align: center;
        color: #4a5050;
        margin: 0;
        margin-top: 0.5rem;
      }

      &__left-text {
        color: #919fb5;
      }

      span {
        display: flex;
        column-gap: 0.5rem;
        text-align: center;
      }

      &__link {
        margin-top: 2rem;
        font-size: 0.5rem !important;
      }
    }
  }
`;

export { AssetCardContainer };
