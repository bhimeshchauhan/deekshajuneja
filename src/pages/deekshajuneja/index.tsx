import * as React from "react";
import { IsMobile } from "../../hooks/isMobile";
import { MobileIndex } from "../../components/mobile/mobileIndex";
import { WebIndex } from "../../components/web/webIndex";

const IndexPage = () => {
  const isMobile = IsMobile();
  return isMobile ? <MobileIndex /> : <WebIndex />;
};

export default IndexPage;
