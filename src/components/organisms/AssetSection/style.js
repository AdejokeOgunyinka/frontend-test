import styled from "styled-components";

const AssetSectionContainer = styled.section`
  padding: 0.5rem 13rem;

  @media (max-width: 900px) {
    padding: 2rem;
  }

  @media (min-width: 1500px) {
    padding: 1.5rem 25rem;
  }

  .asset-section {
    height: 100%;

    &__header {
      font-family: "TomatoGroteskRegular", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 2.5rem;
      text-align: center;
      color: #2d2d2d;
      margin: 0;
    }

    &__text {
      font-family: "DM Sans", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 1rem;
      text-align: center;
      color: #2d2d2d;
      margin-top: 0.5rem;
      margin-bottom: 2rem;
    }

    &__container {
      display: flex;
      column-gap: 2.9rem;
      justify-content: center;
      flex-wrap: wrap;

      @media (max-width: 950px) {
        flex-direction: column;
        row-gap: 2rem;
        align-items: center;
      }
    }
  }
`;

export { AssetSectionContainer };
