import React, { useRef, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import NavLink from "./navLink";
import { ContactBtn, NavigationItems } from "../../data/navigation";
import { Nav, NavList } from "../../styles/header.styles";
import styled from "styled-components";
import { IsMobile } from "../../hooks/isMobile";

// const useOnClickOutside = (ref, handler) => {
//   React.useEffect(() => {
//     const listener = (event) => {
//       if (!ref.current || ref.current.contains(event.target)) {
//         return;
//       }
//       handler(event);
//     };
//     document.addEventListener("mousedown", listener);

//     return () => {
//       document.removeEventListener("mousedown", listener);
//     };
//   }, [ref, handler]);
// };

const StyledMenu = styled.nav<{ open }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #effffa;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 100;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

const MenuB = ({ open, bgColor }: { open: boolean; bgColor?: string }) => {
  const isMobile = IsMobile();
  return (
    <StyledMenu open={open}>
      <Nav isMobile={isMobile}>
        <NavList>
          {NavigationItems.map((navItem) => (
            <NavLink info={navItem} key={navItem.label} bgColor={bgColor} />
          ))}
          <NavLink info={ContactBtn} key={ContactBtn.label} bgColor={bgColor} />
        </NavList>
      </Nav>
    </StyledMenu>
  );
};

const StyledBurger = styled.button<{ open; bgColor }>`
  position: absolute;
  top: 5%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1000;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    // background: ${({ open }) => (open ? "#FFF" : "#FFF")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    background-color: ${({ bgColor }) => (bgColor ? "#eace6b" : "#FFF")};

    // button animation style
    transform: ${({ open }) => (open ? "rotate(30deg)" : "rotate(0)")};

    :nth-child(1) {
      width: 30px;
    }

    :nth-child(2) {
      width: 40px;
    }

    // Another button animation style
    // :first-child {
    //   transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    // }

    // :nth-child(2) {
    //   opacity: ${({ open }) => (open ? "0" : "1")};
    //   transform: ${({ open }) =>
      open ? "translateX(20px)" : "translateX(0)"};
    // }

    // :nth-child(3) {
    //   transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    // }
  }
`;

const Burger = ({
  open,
  setOpen,
  bgColor,
}: {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  bgColor?: string;
}) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)} bgColor={bgColor}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
export const MobileNav = ({ bgColor }: { bgColor?: string }) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  return (
    <div ref={node}>
      <Burger open={open} setOpen={setOpen} bgColor={bgColor} />
      <MenuB open={open} bgColor={bgColor} />
    </div>
  );
};
