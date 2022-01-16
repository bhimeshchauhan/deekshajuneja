import * as React from "react";
import { Layout } from "../../components/layout";
import {
  Description,
  Hello,
  HomeContainer,
  IntroContainer,
  Introduction,
  IntroImgCnt,
  MeetMe,
  Name,
  Work,
} from "../../styles/webIndex.styles";
import deekshaMe from "../../images/deek.png";

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
                A business woman, product manager, strategist, author, and makeup
                artist
              </Work>
            </Description>
          </Introduction>
        </IntroContainer>
      </HomeContainer>
    </Layout>
  );
};
