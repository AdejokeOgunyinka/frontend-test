import styled from "styled-components";

const CommentCardContainer = styled.div`
  width: 25.56rem;
  height: 15.56rem;
  border: 1px solid #ecfefe;
  box-sizing: border-box;
  box-shadow: 0px 12px 24px rgba(64, 187, 195, 0.15);
  border-radius: 0.625rem;
  padding: 1rem;
  position: relative;

  .comment {
    &__header {
      font-family: "DM Sans", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 1rem;
      color: #4a5050;
    }
    &__inner {
      display: flex;
      align-items: center;
      bottom: 0;
      position: absolute;
      margin-bottom: 1.5rem;

      &__image {
        width: 2rem;
        height: 2rem;
        margin-right: 1rem;
        border-radius: 50%;
      }
      &__name {
        font-family: "TomatoGroteskRegular", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 1rem;
        color: #2d2d2d;
      }
    }
  }
`;

export { CommentCardContainer };
