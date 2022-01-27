import Carousel from "nuka-carousel";
import styled from "styled-components";

export const SocialContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ExpContainer = styled.div`
  display: flex;
  margin: 7vw;
  flex-direction: column;
  @media (min-width: 1440px) {
    margin-top: 4vw;
  }
`;

export const Line = styled.ul<{ index: number }>`
  display: flex;
  margin: 0;
  height: fit-content;
  align-items: center;
  & li:nth-of-type(${(props) => props.index + 1}) {
    transform: scale(2);
    transition-duration: 0.5s;
    margin: 0 5vw;
    @media (min-width: 2560px) {
      transform: scale(3);
      margin: 0 2vw;
    }
    @media (min-width: 1440px) {
      transform: scale(2);
      margin: 0 4vw;
    }
  }
`;

export const Divider = styled.hr`
  width: 100%;
  margin: 0;
`;

export const LineItem = styled.li`
  list-style: none;
  height: 4vw;
  margin: 0 2vw;
  align-items: center;
  display: flex;
  transition-duration: 0.5s;
  @media (min-width: 2560px) {
    margin: 0 1vw;
  }
`;

export const ListDetail = styled.div<{ img }>`
  display: flex;
  flex-direction: column;
  width: 1vw;
  height: 1vw;
  border-radius: 1vw;
  animation: pulse 5s;
  transform: scale(6);
  margin: 0 2vw;
  background-image: ${(props) => `url(${props.img})`};
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
  :hover {
    cursor: pointer;
  }
  @media (min-width: 2560px) {
    transform: scale(1.5);
    margin: 0;
  }
  @media (min-width: 1440px) {
    transform: scale(4);
    margin: 0;
  }
`;

export const Card = styled.div`
  background-color: white;
  margin: 0 2vw;
`;

export const ExpCarousel = styled(Carousel)`
  margin-top: 7vh;
  .slider-frame {
    height: 55vw !important;
    background-color: white;
    box-shadow: 0px 0px 42px 7px rgba(0, 0, 0, 0.15);
    margin: 0 12px;
    border-radius: 25px;
    @media (min-width: 768px) {
      height: 46vw !important;
    }
    @media (min-width: 1024px) {
      height: 50vw !important;
      @media (max-height: 658px) {
        height: 32vw !important;
      }
    }
    @media (min-width: 1440px) {
      height: 23vw !important;
    }
    @media (min-width: 2560px) {
      height: 8vw !important;
    }
  }
  .slider-control-centerleft {
    left: -6% !important;
    button {
      background-color: transparent;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      :hover {
        cursor: pointer;
      }
    }
  }
  .slider-control-centerright {
    right: -6% !important;
    button {
      background-color: transparent;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      :hover {
        cursor: pointer;
      }
    }
  }
`;

export const EmploymentCardContainer = styled.div`
  margin: 10.2%;
`;

export const Responsibility = styled.div`
  overflow: auto;
  height: 20vh;
  font-style: italic;
  margin-top: 4%;
  background: /* Shadow covers */ linear-gradient(
      white 30%,
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%,
    /* Shadows */
      radial-gradient(
        50% 0,
        farthest-side,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0)
      ),
    radial-gradient(
        50% 100%,
        farthest-side,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0)
      )
      0 100%;
  background: /* Shadow covers */ linear-gradient(
      white 30%,
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%,
    /* Shadows */
      radial-gradient(
        farthest-side at 50% 0,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0)
      ),
    radial-gradient(
        farthest-side at 50% 100%,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0)
      )
      0 100%;
  background-repeat: no-repeat;
  background-color: white;
  background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;
  /* Opera doesn't support this in the shorthand */
  background-attachment: local, local, scroll, scroll;
`;

export const Header = styled.h2`
  margin-bottom: 2%;
`;

export const Title = styled.h4`
  margin-bottom: 1%;
`;
