import React, { useState } from "react";
import styled from "styled-components";
import { Social } from "../../components/socials/socials";
import { Layout } from "../../components/layout";
import Carousel from "nuka-carousel";
import { ExperienceItem } from "../../data/experience";

export const SocialContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ExpContainer = styled.div`
  display: flex;
  margin: 7vw;
  flex-direction: column;
  @media (min-width: 1440px) {
    margin-top: 4vw;
  }
`;

export const Line = styled.ul<{ index: number }>`
  display: flex;
  margin: 0;
  height: fit-content;
  align-items: center;
  & li:nth-of-type(${(props) => props.index + 1}) {
    transform: scale(1.7);
    transition-duration: 0.5s;
    margin: 0 5vw;
  }
`;

export const Divider = styled.hr`
  width: 100%;
  margin: 0;
`;

export const LineItem = styled.li`
  list-style: none;
  height: 4vw;
  margin: 0;
  margin: 0 0.9vw;
  align-items: center;
  display: flex;
  transition-duration: 0.5s;
`;

export const ListDetail = styled.div<{ img }>`
  display: flex;
  flex-direction: column;
  width: 1vw;
  height: 1vw;
  border-radius: 1vw;
  animation: pulse 5s;
  transform: scale(6);
  margin: 0 2vw;
  background-image: ${(props) => `url(${props.img})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-color: white;
  background-position: center;
  :hover {
    cursor: pointer;
  }
`;

export const Card = styled.div`
  background-color: white;
  margin: 0 2vw;
`;

export const ExpCarousel = styled(Carousel)`
  margin-top: 7vh;
  .slider-frame {
    height: 60vh !important;
  }
  .slider-control-centerleft {
    left: -6% !important;
    button {
      background-color: transparent;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      :hover {
        cursor: pointer;
      }
    }
  }
  .slider-control-centerright {
    right: -6% !important;
    button {
      background-color: transparent;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      :hover {
        cursor: pointer;
      }
    }
  }
`;

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
      <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide1" />
      <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide2" />
      <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide3" />
      <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide4" />
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
