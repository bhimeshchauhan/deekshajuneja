import React from "react";
import styled from "styled-components";
import { Social } from "../../components/socials/socials";
import { Layout } from "../../components/layout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

export const Line = styled.ul`
  display: flex;
  margin: 0;
  height: fit-content;
  align-items: center;
`;

export const Divider = styled.hr`
  width: 100%;
  margin: 0;
`;

export const LineItem = styled.li`
  list-style: none;
  height: 1vw;
  margin: 0;
  margin: 0 0.3vw;
  :hover {
    transform: scale(1.5);
    margin: 0 0.6vw;
  }
`;

export const ListDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 1vw;
  height: 1vw;
  background-color: #fff;
  border-radius: 1vw;
  :hover {
    cursor: pointer;
  }
`;

export const Card = styled.div`
  background-color: white;
  margin: 0 2vw;
`;

export const SlideContainer = styled.div`
  .slick-slide.slick-center img {
    transform: scale(1.1);
    margin-left: auto;
    margin-right: auto;
  }
  .slick-center {
    background-color: red;
  }
  .slick-center {
    -webkit-transform: scale(1.25);
    -moz-transform: scale(1.25);
    transform: scale(1.25);
}
`;

export const CenterMode = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <SlideContainer>
      <Slider {...settings}>
        <Card>
          <h3>1</h3>
        </Card>
        <Card>
          <h3>2</h3>
        </Card>
        <Card>
          <h3>3</h3>
        </Card>
        <Card>
          <h3>4</h3>
        </Card>
        <Card>
          <h3>5</h3>
        </Card>
        <Card>
          <h3>6</h3>
        </Card>
      </Slider>
    </SlideContainer>
  );
};

export const TimeLine = () => {
  return (
    <Line>
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
  return (
    <Layout>
      <ExpContainer>
        <TimeLine />
        <CenterMode />
      </ExpContainer>
      <SocialContainer>
        <Social alignCenter={true} />
      </SocialContainer>
    </Layout>
  );
};
