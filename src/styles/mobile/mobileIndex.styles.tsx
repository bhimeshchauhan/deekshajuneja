import styled from "styled-components";

export const YellowContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`;

export const IntroImgCnt = styled.div`
  display: flex;
`;

export const MeetMe = styled.img`
  transform: scale(1.5);
  margin-bottom: 7vh;
`;

export const IntroContainer = styled.div`
  // width: 100%;
  // align-items: flex-start;
  // justify-content: flex-start;
  // padding-top: 3%;
`;

export const MyNameIs = styled.div`
  height: 200px;
  width: 100%;
  display: block;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  left: 0;
  transform: skewY(-16deg);
  bottom: -6vh;
  z-index: 10;
  padding-top: 5%;
`;

export const Hello = styled.h1`
  font-family: Archivo Black, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 45vw;
  color: #f2f7f6;
  mix-blend-mode: multiply;
`;

export const Name = styled.h1`
  font-family: Warnes, cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transform: rotate(16deg);
  text-align: end;
`;

export const Work = styled.h2`
  font-family: Homemade Apple, cursive;;
  font-style: normal;
  font-weight: normal;
  font-size: 33px; 
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transform: rotate(16deg);
  text-align: end;
`;
