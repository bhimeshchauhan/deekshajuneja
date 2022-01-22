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
  height: 30%;
  width: 30%;
  background-image: ${(props) => `url(${props.bg})`};
  top: 21.5%;
  left: 30%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  filter: drop-shadow(2px 4px 6px black);
`;

export const ExpInfo = styled.div`
  align-self: flex-start;
  > h1 {
    font-size: 1.8rem;
  }
`;

export const ExpInfoText = styled.h4`
  margin-bottom: 0;
  width: 82%;
`;

export const RespList = styled.ul`
  margin-top: 20vw;
  margin-left: 14vw;
  margin-right: 20vw;
  overflow: auto;
  filter: drop-shadow(2px 4px 6px black);
  > li {
    font-style: italic;
  }
`;

export const Controls = styled.div`
  display: flex;
  width: 28%;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 2%;
`;

export const ControlButton = styled.button`
  display: flex;
  width: 10vw;
  height: 10vw;
  align-items: center;
  justify-content: space-around;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: white;
  margin: 4% 0;
  align-items: center;
  :active {
    border-style: outset;
  }
  font-style: montserrat;
  font-weight: 700;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
`;

export const MobileExperience = () => {
  const [expIndex, setExpIndex] = useState(1);
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
            <Controls>
              <ControlButton
                onClick={() => {
                  setExpIndex(expIndex - 1);
                }}
                disabled={expIndex === 0}
              >
                {"<"}
              </ControlButton>
              <ControlButton
                onClick={() => {
                  setExpIndex(expIndex + 1);
                }}
                disabled={expIndex === ExperienceItem.length - 1}
              >
                {">"}
              </ControlButton>
            </Controls>
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
