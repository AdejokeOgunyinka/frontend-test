import styled from "styled-components";

const CommunitySectionContainer = styled.section`
  padding: 3.5rem 13rem;
  display: flex;
  column-gap: 10rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    row-gap: 2.5rem;
    padding: 2rem;
  }

  .community {
    color: #2d2d2d;
    text-align: left;
    width: 29.88rem;

    @media (max-width: 768px) {
      text-align: center;
      width: 100%;
    }

    &__header {
      font-family: "TomatoGroteskBold", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 2.5rem;
      margin: 0;
    }

    &__description {
      font-family: "DM Sans", sans-serif;
      font-size: 1rem;
      margin: 0;
      margin: 0.5rem 0 1.5rem 0;
    }

    &__image {
      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }
`;

export { CommunitySectionContainer };
