import * as React from "react";
import { IsMobile } from "../hooks/isMobile";
import { MobileExperience } from "./mobile/mobileExperience";
import { WebExperience } from "./web/webExperience";

const ExperiencePage = () => {
  const isMobile = IsMobile();
  return isMobile ? <MobileExperience /> : <WebExperience />;
};

export default ExperiencePage;
