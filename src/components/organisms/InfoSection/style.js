import styled from "styled-components";

const InfoSectionContainer = styled.section`
  padding: 0.5rem 13rem;
  display: flex;
  justify-content: center;
  column-gap: 4rem;
  flex-direction: ${(props) => props.flexDirection};

  @media (max-width: 900px) {
    padding: 2rem;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1500px) {
    padding: 1.5rem 25rem;
  }

  .info-section {
    width: 30rem;
    text-align: left;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 900px) {
      margin-right: 0;
      width: 100%;
      text-align: center;
    }

    @media (min-width: 1200px) {
      text-align: left;
    }

    h3 {
      font-family: "TomatoGroteskBold", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 2rem;
      margin: 0;
    }

    h5 {
      font-family: "DM Sans", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #4a5050;
      margin: 0rem;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }

  .image {
    width: 30rem;

    @media (max-width: 900px) {
      width: 20rem;
      height: 15rem;
    }
  }

  .link {
    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export { InfoSectionContainer };
