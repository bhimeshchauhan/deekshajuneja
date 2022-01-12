import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import "../styles/global.css";
import { siteMeta } from "../data/seo";
import favicon from "../assets/images/deeksha-favicon.svg";
import { Header } from "./header/header";

const Wrapper = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  height: auto;
  background-position: bottom;
  padding: 3%;
  position: relative;
  @media (max-width: 700px) {
    min-height: 100vh;
    height: auto;
    overflow: hidden;
  }
  background-color: #eace6b;
`;

export const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: "description", content: siteMeta.description },
            { name: "keywords", content: siteMeta.keywords.join(", ") },
            { name: "author", content: siteMeta.author },
            { name: "copyright", content: siteMeta.copyright },
          ]}
          link={[
            { rel: "shortcut icon", type: "image/png", href: `${favicon}` },
          ]}
        />
        <Wrapper className={location.pathname === "/" ? "cutBackground" : ""}>
          <Header />
          {children}
        </Wrapper>
      </>
    )}
  />
);
