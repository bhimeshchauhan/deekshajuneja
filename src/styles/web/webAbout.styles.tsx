import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  height: 100%;
`;

export const AboutDeekshaImageContainer = styled.div`
  width: 45vw;
  margin: 17.5vh;
`;

export const AboutDeeksha = styled.img`
  position: absolute;
  top: 22%;
  height: 69.2%;
  left: 12vw;
  margin-bottom: 0;
`;

export const Dots = styled.div`
  overflow: hidden;
  padding: 3%;
  background: radial-gradient(
    ellipse at center,
    #eace6b 0%,
    #eace6b 30%,
    transparent 30%
  );
  background-size: 21px 21px;
  background-repeat: repeat;
  background-position: 5px center;
  height: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  background-position: bottom;
`;

export const AboutDeekshaContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-top: 13.5vh;
`;

export const Overlay = styled.div``;

export const TextContainer = styled.div`
  height: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  overflow: auto;
  margin: 6vw 6vw 0 0;
  height: 50vh;
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
  font-size: 44px;
  line-height: 58px;
  color: #000000;
  margin-top: 6vw;
  text-align: right;
  text-shadow: 0px 5px 0px rgba(0, 0, 0, 0.25);
`;
