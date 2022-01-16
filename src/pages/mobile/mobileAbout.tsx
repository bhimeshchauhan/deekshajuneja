import * as React from "react";
import { Layout } from "../../components/layout";
import AboutDeekshaImg from "../../images/deek_about.png";
import {
  AboutDeeksha,
  AboutWrapper,
  Overlay,
  TextContainer,
} from "../../styles/mobile/mobileAbout.styles";

export const MobileAbout = () => {
  return (
    <Layout bgColor={"#FFF"}>
      <AboutWrapper>
        <Overlay>
          <AboutDeeksha src={AboutDeekshaImg} />
        </Overlay>
        <TextContainer />
      </AboutWrapper>
    </Layout>
  );
};
