import styled from "styled-components";

export const AboutWrapper = styled.div`
  overflow: hidden;
  padding: 3%;
  background: radial-gradient(
    ellipse at center,
    #eace6b 0%,
    #eace6b 30%,
    transparent 30%
  );
  background-size: 20px 20px;
  background-repeat: repeat;
  background-position: 5px center;
  height: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  background-position: bottom;
`;

export const Overlay = styled.div`
  height: 100%;
`;

export const TextContainer = styled.div`
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    #eace6b 15%,
    #eace6b 100%
  );
  height: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  overflow: auto;
  padding: 6vw;
  z-index: 10;
`;

export const AboutDeeksha = styled.img`
  margin-bottom: -10vh;
  margin-left: 30vw;
  height: 45vh;
  transform: scale(2.5);
  padding-top: 14vh;
`;

export const Title = styled.h1`
  font-family: Warnes, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.7;
  margin-bottom: -3vh;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const AboutText = styled.p``;

export const Sign = styled.p`
  font-family: Sacramento, cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 47px;
  line-height: 58px;
  color: #000000;
  text-shadow: 0px 5px 0px rgba(0, 0, 0, 0.25);
`;
