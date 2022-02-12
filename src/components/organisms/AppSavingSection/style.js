import styled from "styled-components";

const AppSavingSectionContainer = styled.section`
  padding: 3.5rem 13rem;
  display: flex;
  column-gap: 10rem;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;

  @media (max-width: 768px) {
    display: none;
  }

  .app-savings-section {
    &__image {
      filter: drop-shadow(0px 1.60087px 16.0087px rgba(53, 71, 89, 0.15));
    }

    &__container {
      color: #2d2d2d;
      font-style: normal;
      width: 25.06rem;

      &__title {
        font-family: "TomatoGroteskRegular", sans-serif;
        font-weight: 500;
        font-size: 1.125rem;
        margin: 0;
      }

      &__header {
        font-family: "TomatoGroteskBold", sans-serif;
        font-weight: 600;
        font-size: 2.5rem;
        margin: 0;
        display: flex;

        &__inner {
          color: #9932cc;
          margin: 0;
          font-size: 2.5rem;
          margin-left: 0.5rem;
        }
      }

      &__text {
        font-family: "TomatoGroteskRegular", sans-serif;
        font-weight: normal;
        font-size: 1rem;
        margin: 0;
        margin-top: 0.5rem;
        margin-bottom: 1rem;
      }
    }
  }
`;

export { AppSavingSectionContainer };
