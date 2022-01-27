import React, { useState } from "react";
import { Social } from "../../components/socials/socials";
import { Layout } from "../../components/layout";
import { ExperienceItem } from "../../data/experience";
import {
  ExpContainer,
  ExpCompanyDetails,
  ExpInfo,
  ExpInfoText,
  Controls,
  ControlButton,
  ExpResp,
  RespList,
  CompanyLogo,
} from "../../styles/mobile/mobileExperience.styles";

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
