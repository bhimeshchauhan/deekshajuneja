import React from "react";
import styled from "styled-components";
import { SocialItems } from "../../data/social";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialRow = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40%;
  position: absolute;
  bottom: 0;
  right: 6%;
`;

export const Social = () => {
  return (
    <SocialRow>
      {SocialItems.map((item) => {
        return (
          <h1>
            <FontAwesomeIcon icon={item.icon} />
          </h1>
        );
      })}
    </SocialRow>
  );
};
