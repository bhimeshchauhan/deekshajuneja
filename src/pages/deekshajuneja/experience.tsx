import * as React from "react";
import { IsMobile } from "../../hooks/isMobile";
import { MobileExperience } from "../../components/mobile/mobileExperience";
import { WebExperience } from "../../components/web/webExperience";

const ExperiencePage = () => {
  const isMobile = IsMobile();
  return isMobile ? <MobileExperience /> : <WebExperience />;
};

export default ExperiencePage;
