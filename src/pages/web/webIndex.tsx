import * as React from "react";
import { Layout } from "../../components/layout";
import { Social } from "../../components/socials/socials";
import deekshaMe from "../../images/deek.png";
import {
  HomeContainer,
  IntroImgCnt,
  MeetMe,
  IntroContainer,
  Introduction,
  Hello,
  Name,
  Description,
  Work,
} from "../../styles/web/webIndex.styles";

export const WebIndex = () => {
  return (
    <Layout>
      <HomeContainer>
        <IntroImgCnt>
          <MeetMe src={deekshaMe} />
        </IntroImgCnt>
        <IntroContainer>
          <Introduction>
            <Hello>Hello!</Hello>
            <Name>I'm, Deeksha Juneja</Name>
            <Description>
              <Work>
                A business woman, product manager, strategist, author, and
                makeup artist
              </Work>
            </Description>
          </Introduction>
          <Social />
        </IntroContainer>
      </HomeContainer>
    </Layout>
  );
};
