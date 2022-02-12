import styled from "styled-components";

const DownloadSectionContainer = styled.section`
  margin: 3.5rem 13rem;
  background: #ecfefe;
  border-radius: 3.125rem;
  padding: 1rem 1rem 0 1rem;
  box-sizing: border-box;
  overflow: hidden;
  column-gap: 11.25rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 1rem;
    margin: 1.5rem;
    text-align: center;
    height: 400px;
    justify-content: unset;
  }

  @media (min-width: 1200px) {
    margin: 3.5rem 25rem;
  }

  .download {
    width: 35rem;
    text-align: left;

    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__link {
      font-family: "DM Sans", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      color: #07969e;
      margin: 0;
      margin-bottom: 1rem;
      cursor: pointer;
    }

    &__header {
      font-family: "TomatoGroteskBold", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 2rem;
      color: #2d2d2d;
      margin: 0;

      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
    }

    &__description {
      font-family: "DM Sans", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      color: #4a5050;
      margin: 1rem 0 1.5rem 0;
    }

    &__buttons {
      align-self: center;
    }
  }
`;

export { DownloadSectionContainer };
