import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { getYoutubeVideoId } from "../../api/popular";
import { Text } from "./Text";
import Icon from "./Icon";

interface SliderCardProps {
  width?: string;
  height?: string;
  margin?: string;
  backgroundImage: string;
  videoMovieKey?: number;
  movieTitle?: string;
  description?: string;
}

interface CardContainerProps {
  border?: string;
  width?: string;
  height?: string;
  padding?: number;
  margin?: string;
}

interface OpacityProps {
  width?: string;
}

interface ImageContainerProps {
  width?: string;
  height?: string;
}

interface PlayerContainerProps {
  width?: string;
  height?: string;
}

const CardContainer = styled.div<CardContainerProps>`
  border: ${(props) => (props.border ? `${props.border}px solid` : "0")};
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: ${(props) => (props.height ? `${props.height}` : "100%")};
  margin: ${(props) => props.margin};
`;

const Opacity = styled.div<OpacityProps>`
  position: absolute;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.50);
  height: 100%;
  width: ${(props) => props.width};
  z-index: 1;
`;

const ImageContainer = styled.img<ImageContainerProps>`
  position: absolute;
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: ${(props) => (props.height ? `${props.height}` : "100%")};
  z-index: 0;
`;

const IconContainer = styled.div`
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const PlayerContainer = styled.iframe<PlayerContainerProps>`
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  height: ${(props) => (props.height ? `${props.height}px` : "100%")};
  transform: scale(1.3);
  & .ytp-chrome-top{
    display: none;
  }
`;

const SliderCard: React.FC<SliderCardProps> = ({
  width,
  height,
  backgroundImage,
  videoMovieKey,
  movieTitle,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [videoId, setVideoId] = useState<string>("");

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const getVideoMovie = useCallback(async () => {
    let id = "";
    if (videoMovieKey !== undefined) {
      id = await getYoutubeVideoId(videoMovieKey);
    }
    setVideoId(id);
  }, []);

  useEffect(() => {
    getVideoMovie();
  }, []);

  return (
    <CardContainer
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
      height={height}
    >
      {isHover ? (
          <PlayerContainer
            frameBorder="0"
            allowFullScreen
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&showinfo=0&controls=0&mute=1`}
          />
      ) : (
        <>
          <ImageContainer src={backgroundImage} height={height} width={width} />
          <Opacity width={width}>
            <IconContainer>
              <Icon name="playCircle" height={45} width={45} />
            </IconContainer>
            <Text
              size={20}
              color="#e3e3e3"
              weight="bold"
              marginTop="10%"
              marginLeft="5%"
              family="Arial, sans-serif"
              overflow="hidden"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
            >
              {movieTitle}
            </Text>
          </Opacity>
        </>
      )}
    </CardContainer>
  );
};

export default SliderCard;
