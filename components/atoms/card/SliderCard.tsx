import React, { useState } from "react";
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

interface PlayerContainerProps {
  width?: number;
  height?: number;
}

const CardContainer = styled.div<CardContainerProps>`
  border: ${(props) =>
    props.border ? `${props.border}px solid` : "0.5px solid"};
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: ${(props) => (props.height ? `${props.height}` : "100%")};
  margin: ${(props) => props.margin};
`;

const PlayerContainer = styled.iframe<PlayerContainerProps>`
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  height: ${(props) => (props.height ? `${props.height}px` : "100%")};
  transform: scale(1.2);
  transition: 0.8s ease 0.8s;
`;

const SliderCard: React.FC<SliderCardProps> = ({
  width,
  height,
  margin,
  backgroundImage,
}) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <CardContainer
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
      width={width}
      height={height}
      margin={margin}
      backgroundImage={isHover ? "" : backgroundImage}
    >
      {isHover ? (
        <PlayerContainer
          frameBorder="0"
          src="https://www.youtube.com/embed/jNgP6d9HraI?autoplay=1&amp;controls=0&amp;mute=1"
        />
      ) : (
        <img src={backgroundImage} width={width} height={height} />
      )}
    </CardContainer>
  );
};

export default SliderCard;
