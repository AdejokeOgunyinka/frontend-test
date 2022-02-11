import styled from "styled-components";

const ButtonElement = styled.button`
  padding: 1rem 1.2rem;
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.bgColor};
  font-family: "TomatoGroteskBold", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  outline: none;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 0.5rem 0.6rem;
    font-size: 0.75rem;
  }
`;

export { ButtonElement };
