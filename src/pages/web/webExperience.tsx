import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import { Social } from "../../components/socials/socials";
import { IsMobile } from "../../hooks/isMobile";
import { Layout } from "../../components/layout";
import { Transition } from "react-transition-group";
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
  height: 25%;
  width: 25%;
  background-image: ${(props) => `url(${props.bg})`};
  top: 33%;
  left: 39%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const Controls = styled.div`
  justify-content: space-between;
  display: flex;
  width: 100%;
  align-items: center;
`;

export const ExpInfo = styled.div`
  align-self: flex-start;
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
`;

export const RespList = styled.ul`
  margin-top: auto;
  margin-left: 14vw;
  margin-right: 2vw;
  overflow: auto;
  > li {
    font-style: italic;
  }
`;

const duration = 300;
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export const WebExperience = () => {
  const isMobile = IsMobile();
  const [expIndex, setExpIndex] = useState(1);
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 1000);
  }, []);
  useEffect(() => {
    setShow(false);
    const showTimeout = setTimeout(() => setShow(true), 1000);
    return () => clearTimeout(showTimeout);
  }, [expIndex]);
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
          <Controls>
            <button
              onClick={() => {
                setExpIndex(expIndex - 1);
              }}
              disabled={expIndex === 0}
            >
              PREV
            </button>
            <button
              onClick={() => {
                setExpIndex(expIndex + 1);
              }}
              disabled={expIndex === ExperienceItem.length - 1}
            >
              NEXT
            </button>
          </Controls>
        </ExpCompanyDetails>
        <ExpResp>
          <RespList>
            {ExperienceItem[expIndex].responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </RespList>
        </ExpResp>
      </ExpContainer>
      <Transition in={show} timeout={duration}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <CompanyLogo bg={ExperienceItem[expIndex].logo} />
          </div>
        )}
      </Transition>
      <SocialContainer>
        <Social alignCenter={true} />
      </SocialContainer>
    </Layout>
  );
};
