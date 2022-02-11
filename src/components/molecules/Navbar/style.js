import styled from "styled-components";

const NavbarContainer = styled.nav`
  height: 5.7rem;
  /* padding: 1.75rem 15rem; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1100px) {
    padding: 1.75rem 2rem;
  }

  .navbar-links {
    width: 31.4rem;
    display: flex;
    justify-content: space-between;
    color: #07969e;
    font-family: "TomatoGroteskRegular", sans-serif;

    @media (max-width: 768px) {
      display: none;
    }

    &__single {
      display: flex;
      flex-direction: column;
      align-items: center;

      &__active {
        font-family: "TomatoGroteskBold", sans-serif;
        font-weight: 700;
        text-decoration: none;
        color: #07969e;

        &__circle {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
          color: #07969e;
          background-color: #07969e;
        }
      }

      &__inactive {
        font-weight: 400;
        text-decoration: none;
        color: #07969e;
      }
    }
  }

  .menu-icon {
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

export { NavbarContainer };
