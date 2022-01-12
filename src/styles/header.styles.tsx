import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 700px) {
    .nav {
      margin-left: -35px;
    }
  }
`;

export const NavList = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 700px) {
    .nav-list > a {
      width: 8.5vw;
    }
  }
`;

export const ContactButton = styled.button`
  display: flex;
  width: 135px !important;
  height: 30px !important;
  align-items: center;
  justify-content: space-around;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  :active { border-style: outset;}
  font-style: montserrat;
  font-weight: 700;
  font-size: 15px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
`;
