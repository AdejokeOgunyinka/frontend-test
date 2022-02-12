import styled from "styled-components";

const HeaderContainer = styled.header`
  min-height: 33rem;
  padding: 3.5rem 13rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 2rem;
  }

  @media (min-width: 1500px) {
    padding: 3.5rem 25rem;
  }

  .inner {
    width: 33rem;
    height: 16.5rem;
    text-align: left;

    @media (max-width: 900px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }

  h1 {
    font-family: "TomatoGroteskExtraBold", sans-serif;
    font-weight: 600;
    font-size: 3.5rem;
    line-height: 3.75rem;
    color: #07969e;

    @media (max-width: 900px) {
      font-size: 2rem;
    }
  }

  h4 {
    font-family: "DM Sans", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #4a5050;
  }

  .phone {
    width: 14.2rem;
    height: 28.8rem;

    @media (max-width: 900px) {
      margin-top: 3.5rem;
      align-self: center;
    }
  }
`;

export { HeaderContainer };
