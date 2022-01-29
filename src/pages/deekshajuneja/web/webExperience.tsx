import React, { useState } from "react";
import { Social } from "../../../components/socials/socials";
import { Layout } from "../../../components/layout";
import { ExperienceItem } from "../../../data/experience";
import {
  EmploymentCardContainer,
  Title,
  Responsibility,
  ExpCarousel,
  Line,
  Divider,
  LineItem,
  ListDetail,
  ExpContainer,
  SocialContainer,
  Header,
} from "../../../styles/web/webExperience.styles";

export const EmploymentCard = ({ employment }) => {
  return (
    <EmploymentCardContainer>
      <Header>{employment.name}</Header>
      <Title>{employment.position}</Title>
      <Title>{employment.year}</Title>
      <Title>{employment.location}</Title>
      <Responsibility>
        {employment.responsibilities.map((resp) => {
          return <li>{resp}</li>;
        })}
      </Responsibility>
    </EmploymentCardContainer>
  );
};

export const CenterMode = ({ index, setCurrentSlide }) => {
  return (
    <ExpCarousel
      wrapAround={true}
      renderCenterLeftControls={({ previousSlide }) => (
        <button
          onClick={() => {
            previousSlide();
            setCurrentSlide(
              index === 0 ? ExperienceItem.length - 1 : index - 1
            );
          }}
        >
          {"<"}
        </button>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <button
          onClick={() => {
            nextSlide();
            setCurrentSlide(
              index === ExperienceItem.length - 1 ? 0 : index + 1
            );
          }}
        >
          {">"}
        </button>
      )}
      speed={1000}
      renderBottomCenterControls={null}
      dragging={false}
    >
      {ExperienceItem.map((item) => {
        return <EmploymentCard employment={item} />;
      })}
    </ExpCarousel>
  );
};

export const TimeLine = ({ index }) => {
  return (
    <Line index={index}>
      <Divider />
      {ExperienceItem.map((item) => {
        return (
          <>
            <LineItem>
              <ListDetail img={item.logo} />
            </LineItem>
            <Divider />
          </>
        );
      })}
    </Line>
  );
};

export const WebExperience = () => {
  const [index, setIndex] = useState(0);
  const setCurrentSlide = (slideIndex: number) => {
    setIndex(slideIndex);
  };
  return (
    <Layout>
      <ExpContainer>
        <TimeLine index={index} />
        <CenterMode index={index} setCurrentSlide={setCurrentSlide} />
      </ExpContainer>
      <SocialContainer>
        <Social alignCenter={true} />
      </SocialContainer>
    </Layout>
  );
};
