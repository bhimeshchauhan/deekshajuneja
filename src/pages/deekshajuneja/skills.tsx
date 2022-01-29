import * as React from "react";
import styled from "styled-components";
import { Layout } from "../../components/layout";
import { BusinessSkills } from "../../data/skills";

export const CardContainer = styled.div`
  height: 100%;
  padding: 10vw;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  height: 37vh;
  width: 10vw;
  background-color: orangered;
  flex: 0 0 32%;
`;

const SkillsPage = () => {
  return (
    <Layout bgcolor={"#FFF"}>
      <CardContainer>
        {BusinessSkills.map(() => {
          return <Card />;
        })}
      </CardContainer>
    </Layout>
  );
};

export default SkillsPage;
