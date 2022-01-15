import * as React from "react";
import { Layout } from "../components/layout";
import {
  Hello,
  HomeContainer,
  IntroContainer,
  IntroImgCnt,
  MeetMe,
  MyNameIs,
  Name,
  Work,
} from "../styles/mobileIndex.styles";
import Deeksha from "../images/deek.png";

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
    </Layout>
  );
};
