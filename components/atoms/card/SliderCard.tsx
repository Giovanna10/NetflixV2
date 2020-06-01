import React, { useState } from "react";
import { Text } from "../text/Text";
import styled from "styled-components";

interface SliderCardProps {
  width?: string;
  height?: string;
  margin?: string;
  backgroundImage: string;
}

interface CardContainerProps {
  backgroundImage: string;
  border?: string;
  width?: string;
  height?: string;
  padding?: number;
  margin?: string;
}

const CardContainer = styled.div<CardContainerProps>`
  background-image: ${(props) => `url("${props.backgroundImage}")`};
  background-repeat: no-repeat;
  background-size: cover;
  border: ${(props) =>
    props.border ? `${props.border}px solid` : "0.5px solid"};
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: ${(props) => (props.height ? `${props.height}` : "100%")};
  margin: ${(props) => props.margin};
`;

const SliderCard: React.FC<SliderCardProps> = ({ width, height, margin, backgroundImage }) => {
  const [isHover, setIsHover] = useState(false);
  const Details = (
    <>
      <Text color={"#fefefe"} molecolTitle>Title</Text>
      <Text color={"#fefefe"} paragraph>Duration</Text>
    </>
  );

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <CardContainer
      onMouseOver={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
      width={width}
      height={height}
      margin={margin}
      backgroundImage={backgroundImage}
    >
      {isHover ? Details : null}
    </CardContainer>
  );
};

export default SliderCard;
