import * as React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IsMobile } from "../hooks/isMobile";
import { WebExperience } from "./web/webExperience";

const ExperiencePage = () => {
  const isMobile = IsMobile();
  return <WebExperience />;
};

export default ExperiencePage;
