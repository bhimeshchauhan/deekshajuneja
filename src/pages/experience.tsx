import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import { Layout } from "../components/layout";
import { IsMobile } from "../hooks/isMobile";
import { Social } from "../components/socials/socials";
import { SocialContainer } from "../styles/contact.styles";
import { ExperienceItem, experienceType } from "../data/experience";

export const ExperienceContainer = styled.div`
  width: 100%;
  height: 70vh;
  margin-top: 16vh;
`;

export const Experience = styled.div<{ isMobile }>`
  width: ${({ isMobile }) => (isMobile ? "85%" : "60%")};
  height: ${({ isMobile }) => (isMobile ? "100%" : "60%")};
  background: white;
  margin: 0 auto;
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  border-radius: 30px;
  box-shadow: 0px 0px 1.2em rgba(0, 0, 0, 0.5);
`;

export const CarouselExpCard = styled(Carousel)<{ isMobile }>`
  height: 100%;
  margin-right: ${({ isMobile }) => (isMobile ? "18%" : "auto")};
  .carousel .slider-wrapper {
    height: ${({ isMobile }) => (isMobile ? "100vh" : "80vh")};
  }
`;

export const CompanyInfo = styled.div<{ isMobile; logo }>`
  background-image: url(${({ logo }) => logo});
  height: ${({ isMobile }) => (isMobile ? "75vw" : "auto")};
  width: ${({ isMobile }) => (isMobile ? "auto" : "40%")};
  display: flex;
  flex-direction: column;
  align-items: center;
  // background: #6f9eef;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  blur: 0.9;
  border-radius: 30px;
  box-shadow: 0px 0px 1.2em rgba(0, 0, 0, 0.5);
`;

export const Responsibility = styled.div<{ isMobile }>`
  height: ${({ isMobile }) => (isMobile ? "80vw" : "auto")};
  width: ${({ isMobile }) => (isMobile ? "auto" : "60%")};
  padding: 4%;
  overflow: auto;
  text-align: left;
  margin: ${({ isMobile }) => (isMobile ? "0% 7%" : "unset")}; ;
`;

export const CompanyLogo = styled.img<{ isMobile }>`
  width: 35% !important;
  vertical-align: top;
  border: 0;
  margin-top: ${({ isMobile }) => (isMobile ? "20%" : "0")};
  margin-bottom: ${({ isMobile }) => (isMobile ? "1rem" : "0")};
`;

export const CompanyName = styled.h4`
  font-family: Source Sans Pro;
`;
export const Position = styled.h4`
  margin: 0;
  font-family: Source Sans Pro;
`;
export const Year = styled.h5`
  margin: 0;
  font-family: Source Sans Pro;
`;
export const Location = styled.h6`
  margin: 0;
  font-family: Source Sans Pro;
`;

export const CompanyContainer = styled.div<{ isMobile }>`
  width: 101%;
  height: 100%;
  border-radius: 30px;
  backdrop-filter: blur(55px);
  padding: ${({ isMobile }) => (isMobile ? "3vh 8vh" : "8vh 0")};
`;

export const Controls = styled.div`
  width: 100%;
`;

export const LeftButton = styled.button``;
export const RightButton = styled.button``;

const ExperienceCard = ({
  isMobile,
  experience,
}: {
  isMobile: boolean;
  experience: experienceType;
}) => {
  return (
    <ExperienceContainer>
      <Experience isMobile={isMobile}>
        <CompanyInfo isMobile={isMobile} logo={experience.logo}>
          <CompanyContainer isMobile={isMobile}>
            <CompanyLogo src={experience.logo} isMobile={isMobile} />
            <CompanyName>{experience.name}</CompanyName>
            <Position>{experience.position}</Position>
            <Year>{experience.year}</Year>
            <Location>{experience.location}</Location>
          </CompanyContainer>
        </CompanyInfo>
        <Responsibility isMobile={isMobile}>
          {experience.responsibilities.map((responsibility) => {
            return <li>{responsibility}</li>;
          })}
        </Responsibility>
      </Experience>
    </ExperienceContainer>
  );
};

const ExperiencePage = () => {
  const isMobile = IsMobile();
  return (
    <Layout>
      <CarouselExpCard
        isMobile={isMobile}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop={true}
        showArrows={false}
        showStatus={false}
        autoPlay={isMobile}
        stopOnHover={true}
        transitionTime={500}
      >
        {ExperienceItem.map((experience) => {
          console.log(experience);
          return <ExperienceCard isMobile={isMobile} experience={experience} />;
        })}
      </CarouselExpCard>
      <Controls>
        <LeftButton>Prev</LeftButton>
        <RightButton>Next</RightButton>
      </Controls>

      <SocialContainer>
        <Social alignCenter={true} />
      </SocialContainer>
    </Layout>
  );
};

export default ExperiencePage;
