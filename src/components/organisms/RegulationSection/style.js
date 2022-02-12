import styled from "styled-components";

const RegulationSectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }

  .regulation-section {
    width: 100%;
    /* width: 23.25rem; */
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &__left-section,
    &__right-section {
      flex-basis: 38%;
      display: flex;
      flex-direction: column;

      @media (max-width: 768px) {
        flex-direction: 15%;
        height: 100%;
      }
    }

    &__left-section {
      align-items: flex-start;
    }

    &__right-section {
      align-items: flex-end;
    }

    &__text-section {
      flex-basis: 24%;
      width: 31.5rem;
      text-align: center;
      color: #2d2d2d;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @media (max-width: 768px) {
        flex-basis: 100%;
      }

      &__header {
        font-family: "TomatoGroteskBold";
        font-style: normal;
        font-weight: 600;
        font-size: 2.5rem;
        margin: 0;
        margin-bottom: 0.5rem;
      }
      &__description {
        font-family: "DM Sans", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 1rem;
        margin: 0;
      }
    }
  }
`;

const CircleWithBlur = styled.div`
  width: 30.25rem;
  height: 20.25rem;
  background: ${(props) => props.backgroundColor};
  opacity: 0.9;
  filter: blur(2.75rem);
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 5.25rem;
    height: 15.25rem;
    background: ${(props) => props.backgroundColor};
    opacity: 0.9;
    filter: blur(1.75rem);
  }
`;

export { RegulationSectionContainer, CircleWithBlur };
