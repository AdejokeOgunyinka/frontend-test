import styled from "styled-components";

const PartnerSection = styled.section`
  height: 3.6rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  .partner-image {
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export { PartnerSection };
