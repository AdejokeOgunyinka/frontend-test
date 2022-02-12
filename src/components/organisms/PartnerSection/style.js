import styled from "styled-components";

const PartnerSectionContainer = styled.section`
  padding: 0.5rem 13rem;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;

  @media (max-width: 900px) {
    padding: 0.5rem;
    column-gap: 0.5rem;
    margin-top: 2.5rem;
  }

  @media (min-width: 1500px) {
    padding: 1.5rem 25rem;
  }

  .partners {
    &__arm {
      width: 6rem;
      height: 6rem;
      fill: purple;

      @media (max-width: 768px) {
        width: 4rem;
        height: 4rem;
      }
    }
    &__wu {
      width: 14rem;
      height: 14rem;

      @media (max-width: 768px) {
        width: 3rem;
        height: 3rem;
      }
    }
    &__tstars {
      width: 11rem;
      height: 11rem;

      @media (max-width: 768px) {
        width: 3rem;
        height: 3rem;
      }
    }
    &__vee {
      width: 5rem;
      height: 5rem;

      @media (max-width: 768px) {
        width: 3rem;
        height: 3rem;
      }
    }
  }
`;

export { PartnerSectionContainer };
