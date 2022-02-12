import styled from "styled-components";

const CommentSectionContainer = styled.section`
  display: flex;
  flex-direction: column;

  .comment-section {
    &__header {
      font-family: "TomatoGroteskRegular", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 2.5rem;
      text-align: center;
      color: #40bbc3;
      margin: 1.5rem 0 1rem 0;
    }

    &__description {
      width: 35rem;
      align-self: center;

      @media (max-width: 768px) {
        width: 100%;
      }

      &__text {
        font-family: "DM Sans", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 1.2rem;
        line-height: 23px;
        text-align: center;
        color: #4a5050;
        margin: 0 0 3.5rem 0;
      }
    }
    &__inner {
      display: flex;
      column-gap: 1rem;
      justify-content: center;

      @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export { CommentSectionContainer };
