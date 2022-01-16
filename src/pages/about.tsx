import * as React from "react";
import { IsMobile } from "../hooks/isMobile";
import { MobileAbout } from "./mobile/mobileAbout";
import { WebAbout } from "./web/webAbout";

const AboutPage = () => {
  const isMobile = IsMobile();
  return isMobile ? <MobileAbout /> : <WebAbout />;
};

export default AboutPage;
