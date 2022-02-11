import styled from "styled-components";

const InfoSectionContainer = styled.section`
  padding: 3.5rem 13rem;
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => props.flexDirection};

  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

  .info-section {
    width: 23.5rem;
    margin-right: 4.625rem;
    text-align: left;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
      margin-right: 0;
      width: 100%;
      text-align: center;
    }

    h3 {
      font-family: "TomatoGroteskBold", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 2rem;
    }

    h5 {
      font-family: "DM Sans", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #4a5050;
    }
  }

  .image {
    width: 30rem;

    @media (max-width: 768px) {
      width: 20rem;
      height: 20rem;
    }
  }
`;

export { InfoSectionContainer };
