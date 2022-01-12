import React from "react";
import NavLink from "./navLink";
import { NavigationItems } from "../../data/navigation";
import { ContactButton, Nav, NavList } from "../../styles/header.styles";

export const Header = () => (
  <Nav>
    <NavList>
      {NavigationItems.map((navItem) => (
        <NavLink info={navItem} key={navItem.label} />
      ))}
      <ContactButton>
        Get In Touch
      </ContactButton>
    </NavList>
  </Nav>
);
