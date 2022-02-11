import styled from "styled-components";

const DownloadBtnContainer = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #2d2d2d;
  padding: 0.4em 0.8rem;
  border-radius: 0.625rem;
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0.3rem 0.6rem;
  }

  img {
    margin-right: 0.5rem;
  }

  p {
    font-family: "TomatoGroteskThin", sans-serif;
    font-size: 0.625rem;
    line-height: 0.1rem;

    @media {
      font-size: 0.5rem;
    }

    b {
      font-family: "TomatoGroteskSemiBold", sans-serif;
      font-weight: 600;
      font-size: 0.8rem;

      @media (max-width: 768px) {
        font-size: 0.6rem;
      }
    }
  }
`;

export { DownloadBtnContainer };
