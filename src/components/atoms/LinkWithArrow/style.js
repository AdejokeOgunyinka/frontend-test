import styled from "styled-components";

const LinkContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  .arrow {
    width: 0.625rem;
    height: 0.75rem;
  }
`;

const LinkElement = styled.a`
  color: #07969e;
  font-family: "TomatoGroteskRegular", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.2rem;
  text-decoration: none;
  margin-right: 1rem;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

export { LinkContainer, LinkElement };
