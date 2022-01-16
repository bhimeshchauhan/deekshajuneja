import React from "react";
import styled from "styled-components";
import { SocialItems } from "../../data/social";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IsMobile } from "../../hooks/isMobile";

const SocialRow = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40%;
  position: absolute;
  bottom: 0;
  right: 6%;
`;

const MobileSocialRow = styled.div`
  right: 6%;
  height: 55%;
  display: flex;
  position: absolute;
  flex-direction: column-reverse;
  justify-content: space-around;
  top: 14vh;
`;

const Data = () => {
  return (
    <>
      {SocialItems.map((item) => {
        return (
          <h1>
            <FontAwesomeIcon icon={item.icon} />
          </h1>
        );
      })}
    </>
  );
};

export const Social = () => {
  const isMobile = IsMobile();
  return isMobile ? (
    <MobileSocialRow>
      <Data />
    </MobileSocialRow>
  ) : (
    <SocialRow>
      <Data />
    </SocialRow>
  );
};
