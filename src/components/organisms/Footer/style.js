import styled from "styled-components";

const FooterContainer = styled.footer`
  min-height: 25.9rem;
  display: flex;
  /* padding: 1.75rem 15rem; */

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
