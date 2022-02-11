import styled from "styled-components";

const FooterLinkSpan = styled.span`
  display: flex;
  cursor: pointer;
`;

const FooterText = styled.a`
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;
  color: #2d2d2d;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export { FooterLinkSpan, FooterText };
