import styled from "styled-components";

const HeaderContainer = styled.header`
  min-height: 33rem;
  padding: 1.5rem 13rem 3.5rem; 13rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 2rem;
  }

  @media (min-width: 1500px) {
    padding: 1rem 25rem 3.5rem 25rem;
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
    font-family: "TomatoGroteskBold", sans-serif;
    font-weight: 600;
    font-size: 3.5rem;
    line-height: 3.75rem;
    color: #07969e;
    margin: 0;

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
    filter: drop-shadow(0px 1.60087px 16.0087px rgba(53, 71, 89, 0.15));
    animation: bounce 2s;
    animation-direction: alternate;
    animation-timing-function: cubic-bezier(0.1, 0.1, 0.1, 0.1);
    animation-iteration-count: infinite;
  }

  @media (max-width: 900px) {
    margin-top: 3.5rem;
    align-self: center;
  }

  @keyframes bounce {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(0, 15px, 0);
    }
  }
`;

export { HeaderContainer };
