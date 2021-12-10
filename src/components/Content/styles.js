import styled from "styled-components";

import MeImage from "../../assets/images/me.png";

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  width: 100%;
  height: 100%;

  color: white;
`;
export const ContentWrapper = styled.div`
  position: relative;
  font-weight: bold;

  width: auto;
  max-width: 50%;

  &:after {
    position: absolute;
    content: "";

    background-image: url(${MeImage});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    height: 500px;
    width: 500px;
    top: 0;
    left: 0;

    transform: translate(-70%, -35%);

    z-index: 1;
  }
`;
export const ContentTitle = styled.h1`
  font-weight: 900;
  font-size: 64px;
  line-height: 77px;

  color: #ffffff;

  span {
    z-index: -1;
    position: relative;
  }
  z-index: 2;
`;
export const contentDescription = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  z-index: 2;
`;

export const HandImage = styled.img`
  position: absolute;
  right: 200px;
  bottom: 0;
  z-index: 2;
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 50px;
`;

export const Button = styled.a`
  padding: 20px 30px;
  border-radius: 8px;

  border: none;

  cursor: pointer;

  font-weight: 600;
  font-size: 16px;

  text-decoration: none;

  background-color: ${(props) =>
    props.type === "primary" ? "#0e76a8" : "#171515"};

  color: #fff;
`;
