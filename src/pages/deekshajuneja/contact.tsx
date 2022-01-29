import * as React from "react";
import { Layout } from "../../components/layout";
import { Social } from "../../components/socials/socials";
import { IsMobile } from "../../hooks/isMobile";
import Cups from "../../images/cups.png";
import {
  CoffeeContainer,
  CoffeeImg,
  SocialContainer,
} from "../../styles/contact.styles";

const ContactPage = () => {
  const isMobile = IsMobile();
  return (
    <Layout bgcolor={"#FFF"}>
      <CoffeeContainer isMobile={isMobile}>
        <CoffeeImg src={Cups} />
      </CoffeeContainer>
      <SocialContainer>
        <Social alignCenter={true} />
      </SocialContainer>
    </Layout>
  );
};

export default ContactPage;
