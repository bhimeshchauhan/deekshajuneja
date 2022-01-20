import * as React from "react";
import { Layout } from "../../components/layout";
import { Social } from "../../components/socials/socials";
import Deeksha from "../../images/deek_formal.png";
import { MyNameIs } from "../../styles/mobile/mobileIndex.styles";
import {
  Name,
  Work,
  HomeContainer,
  IntroContainer,
  Hello,
  IntroImgCnt,
  MeetMe,
} from "../../styles/mobile/mobileIndex.styles";

export const MobileIndex = () => {
  return (
    <Layout>
      <MyNameIs>
        <Name>I'm, Deeksha</Name>
        <Work>product manager</Work>
      </MyNameIs>
      <HomeContainer>
        <IntroContainer>
          <Hello>Hi!</Hello>
        </IntroContainer>
        <IntroImgCnt>
          <MeetMe src={Deeksha} />
        </IntroImgCnt>
      </HomeContainer>
      <Social />
    </Layout>
  );
};
