import * as React from "react";
import { IsMobile } from "../../hooks/isMobile";
import { MobileAbout } from "../../components/mobile/mobileAbout";
import { WebAbout } from "../../components/web/webAbout";

const AboutPage = () => {
  const isMobile = IsMobile();
  return isMobile ? <MobileAbout /> : <WebAbout />;
};

export default AboutPage;
