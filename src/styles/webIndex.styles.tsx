import styled from "styled-components";

export const YellowContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const HomeContainer = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;
`;

export const IntroImgCnt = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: end;
`;

export const MeetMe = styled.img`
  // position: absolute;
  bottom: 0;
  left: -30%;
  margin: 0;
  max-width: 100%;
  height: auto;
  width: auto;
  transform: scale(1.5);
`;

export const IntroContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-end;
  padding-top: 3%;
  flex-direction: column-reverse;
`;

export const Hello = styled.div`
  font-family: Archivo Black, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 19vw;
  line-height: 200px;
  text-align: center;
  color: #f2f7f6;
  mix-blend-mode: multiply;
  position: absolute;
  top: 22.5%;
  right: 2vw;
`;

export const Name = styled.div`
  font-family: Warnes, cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 3vw;
  line-height: 110px;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  padding-top: 23.5vh;
  right: 10vw;
`;

export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Work = styled.h2`
  font-family: Homemade Apple, cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 1.73rem;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  line-height: 10vh;
  text-align: center;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50vh;
  margin-right: 5vw;
`;
