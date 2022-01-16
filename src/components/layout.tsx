import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import "../styles/global.css";
import { siteMeta } from "../data/seo";
import favicon from "../assets/images/deeksha-favicon.svg";
import { Header } from "./header/header";

const Wrapper = styled.div<{ bgColor: string }>`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  height: 100vh;
  background-position: bottom;
  padding: 0;
  position: relative;
  @media (max-width: 700px) {
    overflow: hidden;
    padding: 3%;
  }
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#eace6b")};
`;

export const Layout = ({
  children,
  bgColor,
}: {
  children: React.ReactNode;
  bgColor?: string;
}) => {
  return (
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
              { rel: "preconnect", href: "https://fonts.googleapis.com" },
              {
                name: "viewport",
                content: "initial-scale=1.0, width=device-width",
              },
              {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossOriginIsolated: true,
              },
              {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Homemade+Apple&family=Sacramento&family=Warnes&display=swap",
              },
            ]}
          />
          <Wrapper
            className={location.pathname === "/" ? "cutBackground" : ""}
            bgColor={bgColor}
          >
            <Header bgColor={bgColor} />
            {children}
          </Wrapper>
        </>
      )}
    />
  );
};
