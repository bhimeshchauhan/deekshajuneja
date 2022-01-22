import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import { Social } from "../../components/socials/socials";
import { Layout } from "../../components/layout";
import { ExperienceItem } from "../../data/experience";

export const ExpContainer = styled.div`
  display: flex;
  margin-top: 7vw;
  height: 95%;
  flex-direction: column;
`;

export const ExpCompanyDetails = styled.div`
  height: 65%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: space-between;
  padding: 2%;
  flex: 1;    
  border-top-right-radius: 35px;
  border-bottom-right-radius: 35px;
`;

export const ExpResp = styled.div`
  height: 65%;
  background: white;
  flex: 1;
  align-content: flex-end;
  display: flex;
  flex-direction: column;
`;

export const CompanyLogo = styled.div<{ bg }>`
  position: absolute;
  height: 25%;
  width: 25%;
  background-image: ${(props) => `url(${props.bg})`};
  top: 28.5%;
  left: 39%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  filter: drop-shadow(2px 4px 6px black);
`;

export const ExpInfo = styled.div`
  align-self: flex-start;
  > h1 {
    font-size: 1.9rem;
  }
`;

export const ExpInfoText = styled.h4`
  margin-bottom: 0;
`;

export const RespList = styled.ul`
  margin-top: 30vw;
  margin-left: 14vw;
  margin-right: 20vw;
  overflow: auto;
  filter: drop-shadow(2px 4px 6px black);
  > li {
    font-style: italic;
  }
`;

export const MobileExperience = () => {
  const [expIndex, setExpIndex] = useState(1);
  return (
    <Layout>
      <ExpContainer>
        <ExpCompanyDetails>
          <ExpInfo>
            <h1>{ExperienceItem[expIndex].name}</h1>
            <ExpInfoText>{ExperienceItem[expIndex].position}</ExpInfoText>
            <ExpInfoText>{ExperienceItem[expIndex].year}</ExpInfoText>
            <ExpInfoText>{ExperienceItem[expIndex].location}</ExpInfoText>
          </ExpInfo>
        </ExpCompanyDetails>
        <ExpResp>
          <RespList>
            {ExperienceItem[expIndex].responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </RespList>
        </ExpResp>
      </ExpContainer>
      <CompanyLogo bg={ExperienceItem[expIndex].logo} />
      <Social />
    </Layout>
  );
};
