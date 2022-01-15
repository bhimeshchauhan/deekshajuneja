import React from "react";
import NavLink from "./navLink";
import { NavigationItems } from "../../data/navigation";
import { ContactButton, Nav, NavList } from "../../styles/header.styles";
import { MobileNav } from "./mobileNav";
import { IsMobile } from "../../hooks/isMobile";

export const Header = () => {
  const isMobile = IsMobile();
  return isMobile ? (
    <MobileNav />
  ) : (
    <Nav>
      <NavList>
        {NavigationItems.map((navItem) => (
          <NavLink info={navItem} key={navItem.label} />
        ))}
        <ContactButton>Get In Touch</ContactButton>
      </NavList>
    </Nav>
  );
};
