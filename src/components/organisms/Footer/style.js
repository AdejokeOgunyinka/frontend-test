import styled from "styled-components";

const FooterContainer = styled.footer`
  min-height: 14.9rem;
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem 15rem 1.75rem 15rem;

  @media (max-width: 900px) {
    padding: 2rem;
  }

  @media (min-width: 1500px) {
    padding: 0.5rem 25rem 1.75rem 25rem;
  }

  .logo {
    width: 3rem;
    height: 3.7rem;
  }

  section {
    display: flex;
    flex-direction: column;
    flex-basis: 25%;
    text-align: left;

    @media (max-width: 768px) {
      flex-basis: 50%;
    }

    h4 {
      font-family: "TomatoGroteskBold";
      font-style: normal;
      font-weight: 600;
      font-size: 1rem;
      color: #2d2d2d;
    }
  }
`;

export { FooterContainer };
