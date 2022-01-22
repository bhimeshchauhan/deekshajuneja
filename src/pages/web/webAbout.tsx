import React, { useState } from "react";
import { Layout } from "../../components/layout";
import AboutDeekshaImg from "../../images/deeksha_smile.png";
import {
  AboutContainer,
  AboutDeeksha,
  AboutDeekshaContainer,
  AboutDeekshaImageContainer,
  AboutText,
  Dots,
  Overlay,
  Sign,
  TextContainer,
  Title,
} from "../../styles/web/webAbout.styles";

export const WebAbout = () => {
  const [xPos, setXPos] = useState(10);
  const [yPos, setYPos] = useState(10);
  const walk = -15;
  return (
    <Layout bgcolor={"#FFF"}>
      <AboutContainer>
        <AboutDeekshaImageContainer>
          <Dots />
          <AboutDeeksha
            src={AboutDeekshaImg}
            posX={xPos}
            posY={yPos}
            onMouseMove={(e) => {
              console.log(e);
              let x = e.nativeEvent.offsetX;
              let y = e.nativeEvent.offsetY;
              const width = e.currentTarget.offsetWidth;
              const height = e.currentTarget.offsetHeight;
              const xWalk = Math.round((x / width) * walk - walk / 2);
              const yWalk = Math.round((y / height) * walk - walk / 2);
              setXPos(xWalk);
              setYPos(yWalk);
            }}
          />
        </AboutDeekshaImageContainer>
        <AboutDeekshaContainer>
          <Overlay>
            <Title>Who am I?</Title>
          </Overlay>
          <TextContainer>
            <AboutText>
              I’m a graduate from Iowa State University (ISU) in Computer
              Engineering and an MBA at University of Toronto, Class of 2023.
            </AboutText>
            <AboutText>
              I love working with various companies providing them with
              technical and business strategies to be a disruptive force in
              their niche.
            </AboutText>
            <AboutText>
              When I am not working with multiple clients building their
              solution, I like reading, writing and trying new ways to express
              myself via makeup.
            </AboutText>
            <Sign>Deeksha Juneja</Sign>
          </TextContainer>
        </AboutDeekshaContainer>
      </AboutContainer>
    </Layout>
  );
};
