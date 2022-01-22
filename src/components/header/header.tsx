import React from "react";
import NavLink from "./navLink";
import { ContactBtn, NavigationItems } from "../../data/navigation";
import { ContactButton, Nav, NavList } from "../../styles/header.styles";
import { MobileNav } from "./mobileNav";
import { IsMobile } from "../../hooks/isMobile";
import { navigate } from "gatsby-link";

export const Header = ({ bgcolor }: { bgcolor?: string }) => {
  const isMobile = IsMobile();
  return isMobile ? (
    <MobileNav bgcolor={bgcolor} />
  ) : (
    <Nav isMobile={isMobile}>
      <NavList>
        {NavigationItems.map((navItem) => (
          <NavLink info={navItem} key={navItem.label} bgcolor={bgcolor} />
        ))}
        <ContactButton
          bgcolor={bgcolor}
          onClick={() => {
            navigate(ContactBtn.path);
          }}
        >
          {ContactBtn.label}
        </ContactButton>
      </NavList>
    </Nav>
  );
};
