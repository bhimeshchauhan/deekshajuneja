import * as React from "react";
import { Layout } from "../../components/layout";
import AboutDeekshaImg from "../../images/deek_about.png";
import {
  AboutDeeksha,
  AboutText,
  AboutWrapper,
  Overlay,
  Sign,
  TextContainer,
  Title,
} from "../../styles/mobile/mobileAbout.styles";

export const MobileAbout = () => {
  return (
    <Layout bgColor={"#FFF"}>
      <AboutWrapper>
        <Overlay>
          <Title>Who am I?</Title>
          <AboutDeeksha src={AboutDeekshaImg} />
        </Overlay>
        <TextContainer>
          <AboutText>
            I’m a graduate from Iowa State University (ISU) in Computer
            Engineering and an MBA at University of Toronto, Class of 2023.
          </AboutText>
          <AboutText>
            I love working with various companies providing them with technical
            and business strategies to be a disruptive force in their niche.
          </AboutText>
          <AboutText>
            When I am not working with multiple clients building their solution,
            I like reading, writing and trying new ways to express myself via
            makeup.
          </AboutText>
          <Sign>
            Deeksha Juneja
          </Sign>
        </TextContainer>
      </AboutWrapper>
    </Layout>
  );
};
