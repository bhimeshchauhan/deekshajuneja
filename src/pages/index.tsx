import * as React from "react";
import { IsMobile } from "../hooks/isMobile";
import { MobileIndex } from "./mobileIndex";
import { WebIndex } from "./webIndex";

const IndexPage = () => {
  const isMobile = IsMobile();
  return isMobile ? <MobileIndex /> : <WebIndex />;
};

export default IndexPage;
