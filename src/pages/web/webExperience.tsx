import React, { useState } from "react";
import styled from "styled-components";
import { Social } from "../../components/socials/socials";
import { Layout } from "../../components/layout";
import Carousel from "nuka-carousel";

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
    transform: scale(6);
    transition-duration: 0.5s;
    margin: 0 4vw;
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

export const ListDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 1vw;
  height: 1vw;
  background-color: #fff;
  border-radius: 1vw;
  animation: pulse 5s;
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
            setCurrentSlide(index === 0 ? 4 : index - 1);
          }}
        >
          {"<"}
        </button>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <button
          onClick={() => {
            nextSlide();
            setCurrentSlide(index === 4 ? 0 : index + 1);
          }}
        >
          {">"}
        </button>
      )}
      speed={1000}
    >
      <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide1" />
      <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide2" />
      <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide3" />
      <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide4" />
      <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide5" />
    </ExpCarousel>
  );
};

export const TimeLine = ({ index }) => {
  return (
    <Line index={index}>
      <Divider />
      <LineItem>
        <ListDetail></ListDetail>
      </LineItem>
      <Divider />
      <LineItem>
        <ListDetail></ListDetail>
      </LineItem>
      <Divider />
      <LineItem>
        <ListDetail></ListDetail>
      </LineItem>
      <Divider />
      <LineItem>
        <ListDetail></ListDetail>
      </LineItem>
      <Divider />
      <LineItem>
        <ListDetail></ListDetail>
      </LineItem>
      <Divider />
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
