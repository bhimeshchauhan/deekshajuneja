import styled from "styled-components";

export const CoffeeImg = styled.img`
  max-width: 100%;
  height: auto;
  width: auto;
`;

export const CoffeeContainer = styled.div<{ isMobile }>`
  height: ${({ isMobile }) => (isMobile ? "100%" : "80vh")};
  width: ${({ isMobile }) => (isMobile ? "80%" : "auto")};
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
