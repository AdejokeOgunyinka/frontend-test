import styled from "styled-components";

const AssetSectionContainer = styled.section`
  padding: 0.5rem 13rem;

  @media (max-width: 900px) {
    padding: 2rem;
  }

  @media (min-width: 1200px) {
    padding: 1.5rem 25rem;
  }

  .asset-section {
    height: 100%;

    &__header {
      font-family: "TomatoGroteskRegular", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 2.5rem;
      /* line-height: 120%; */
      text-align: center;
      /* letter-spacing: -0.05em; */
      color: #2d2d2d;
      margin: 0;
    }

    &__text {
      font-family: "DM Sans", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 1rem;
      /* line-height: 24px; */
      text-align: center;
      /* letter-spacing: -0.05em; */
      color: #2d2d2d;
      margin-top: 0.5rem;
      margin-bottom: 2rem;
    }

    &__container {
      display: flex;
      column-gap: 2.9rem;
      justify-content: center;

      @media (max-width: 900px) {
        flex-direction: column;
        column-gap: 2rem;
      }
    }
  }
`;

export { AssetSectionContainer };
