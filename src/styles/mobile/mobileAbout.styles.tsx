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
    #eace6b 30%,
    #eace6b 100%
  );
  height: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const AboutDeeksha = styled.img`
  margin-bottom: -10vh;
  margin-left: -10vw;
`;
