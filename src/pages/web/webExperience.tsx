import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import { Social } from "../../components/socials/socials";
import { Layout } from "../../components/layout";
import { ExperienceItem } from "../../data/experience";

export const ExpCompanyDetails = styled.div`
  height: 65%;
  background: white;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: space-between;
  padding: 2%;
  flex: 1;
`;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const CompanyLogo = styled.div<{ bg }>`
  position: absolute;
  height: 20%;
  width: 20%;
  background-image: ${(props) => `url(${props.bg})`};
  top: 33%;
  left: 40%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  filter: drop-shadow(2px 4px 6px black);
`;

export const Controls = styled.div`
  justify-content: space-between;
  display: flex;
  width: 100%;
  align-items: center;
`;

export const ExpInfo = styled.div`
  align-self: flex-start;
  height: 90%;
  > h1 {
    font-size: 2rem;
  }
`;

export const ExpInfoText = styled.h4`
  margin-bottom: 0;
`;

export const ExpContainer = styled.div`
  display: flex;
  margin-top: 7vw;
  height: 100%;
  @media (min-width: 1440px) {
    margin-top: 4vw;
  }
`;

export const ExpResp = styled.div`
  height: 65%;
  flex: 1;
  align-content: flex-end;
  display: flex;
  flex-direction: column;
  filter: drop-shadow(2px 4px 6px black);
  padding: 2%;
  > h2 {
    align-self: flex-end;
    font-style: italic;
    margin-right: 2vw;
  }
`;

export const RespList = styled.ul`
  margin-top: auto;
  margin-left: 14vw;
  margin-right: 2vw;
  overflow: auto;
  text-align: right;
  > li {
    font-style: italic;
  }
`;

export const ControlButton = styled.button`
  display: flex;
  width: 135px !important;
  height: 30px !important;
  align-items: center;
  justify-content: space-around;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: #eace6b;
  :active {
    border-style: outset;
  }
  font-style: montserrat;
  font-weight: 700;
  font-size: 15px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
`;

export const ExpInfoDetail = styled.div`
  padding-right: 10vw;
  overflow: auto;
  height: 70%;
  margin-top: 3%;
  > p {
    font-style: italic;
  }
`;

export const WebExperience = () => {
  const [expIndex, setExpIndex] = useState(0);
  return (
    <Layout>
      <ExpContainer>
        <ExpCompanyDetails>
          <ExpInfo>
            <h1>{ExperienceItem[expIndex].name}</h1>
            <ExpInfoText>
              {ExperienceItem[expIndex].position} |{" "}
              {ExperienceItem[expIndex].year} |{" "}
              {ExperienceItem[expIndex].location}
            </ExpInfoText>
            <ExpInfoDetail>
              <p>{ExperienceItem[expIndex].about}</p>
            </ExpInfoDetail>
          </ExpInfo>
          <Controls>
            <ControlButton
              onClick={() => {
                setExpIndex(expIndex - 1);
              }}
              disabled={expIndex === 0}
            >
              PREV
            </ControlButton>
            <ControlButton
              onClick={() => {
                setExpIndex(expIndex + 1);
              }}
              disabled={expIndex === ExperienceItem.length - 1}
            >
              NEXT
            </ControlButton>
          </Controls>
        </ExpCompanyDetails>
        <ExpResp>
          <h2>What I worked on?</h2>
          <RespList>
            {ExperienceItem[expIndex].responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </RespList>
        </ExpResp>
      </ExpContainer>
      <CompanyLogo bg={ExperienceItem[expIndex].logo} />
      <SocialContainer>
        <Social alignCenter={true} />
      </SocialContainer>
    </Layout>
  );
};
