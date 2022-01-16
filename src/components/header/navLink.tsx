import Link from "gatsby-link";
import React from "react";
import styled from "styled-components";

const LinkNav = styled(Link)<{ bgColor }>`
  color: #e2f2f7;
  margin-right: 35px;
  transition: color 0.2s ease-out;
  text-decoration: none;
  white-space: nowrap;
  > span {
    color: ${({ bgColor }) => (bgColor ? "#eace6b" : "#FFF")};
  }
  @media (max-width: 700px) {
    margin-right: 14px;
    :last-of-type {
      display: flex;
    }
  }
`;

const NavLabel = styled.span`
  color: #fff;
  font-style: montserrat;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
`;

const NavLink = ({
  info,
  bgColor,
}: {
  info: { path: string; label: string };
  bgColor?: string;
}) => (
  <LinkNav to={info.path} activeClassName="active" bgColor={bgColor}>
    <NavLabel>{info.label}</NavLabel>
  </LinkNav>
);

export default NavLink;
