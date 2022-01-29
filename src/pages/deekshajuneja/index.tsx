import * as React from "react";
import { IsMobile } from "../../hooks/isMobile";
import { MobileIndex } from "./mobile/mobileIndex";
import { WebIndex } from "./web/webIndex";

const IndexPage = () => {
  const isMobile = IsMobile();
  return isMobile ? <MobileIndex /> : <WebIndex />;
};

export default IndexPage;
