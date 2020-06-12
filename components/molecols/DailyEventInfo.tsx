import React, { useEffect, useState } from "react";
import Button from "../atoms/Button";
import { Text } from "../atoms/Text";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { Icons } from "../atoms/Icon";

const DailyEventInfoContainer = styled.div`
  position: absolute;
  top: 300px;
  left: 0;
  bottom: 0;
  right: 0;
  margin-left: 5%;
`;

const DescriptionsContainer = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.5);
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 10px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  margin-top: 2%;
`;

interface DailyEventInfoProps {
  title: string;
  overview: string;
  handlePlayVideo: () => void;
  playVideo: boolean;
}

const DailyEventInfo: React.FC<DailyEventInfoProps> = ({
  title,
  overview,
  handlePlayVideo,
  playVideo,
}) => {
  const titleControls = useAnimation();
  const descriptionControls = useAnimation();
  const [playBtnText, setPlayBtnText] = useState<string>("");
  const [playBtnIcon, setPlayBtnIcon] = useState<keyof typeof Icons>();

  const handleStartAnimation = () => {
    titleControls.start({
      translateY: -200,
      transition: { duration: 2 },
    });
    descriptionControls.start({
      scale: 0,
      opacity: 0,
      transition: { duration: 2 },
    });
  };

  const handleEndAnimation = () => {
    titleControls.start({
      translateY: 0,
      transition: { duration: 2 },
    });
    descriptionControls.start({
      scale: 1,
      opacity: 1,
      transition: { duration: 2 },
    });
  };

  const handlePlayButton = playVideo
    ? () => {
        handleStartAnimation();
        setPlayBtnText("Stop");
        setPlayBtnIcon("stopIcon");
      }
    : () => {
        handleEndAnimation();
        setPlayBtnText("Play");
        setPlayBtnIcon("playIcon");
      };

  useEffect(() => {
    handlePlayButton();
  }, [playVideo]);

  return (
    <DailyEventInfoContainer>
      <Text
        size={40}
        weight="bold"
        color="#fefefe"
        family="Arial, Helvetica, sans-serif"
        animate={titleControls}
      >
        {title}
      </Text>
      <DescriptionsContainer animate={descriptionControls}>
        <Text
          size={16}
          weight="400"
          color="#fefefe"
          align="center"
          family="Arial, Helvetica, sans-serif"
        >
          {overview}
        </Text>
      </DescriptionsContainer>
      <ButtonsContainer>
        <Button
          height="55px"
          width="115px"
          backgroundColor="rgba(1, 210, 119, .65)"
          text={playBtnText}
          textColor="#000000"
          textSize={14}
          icon={playBtnIcon}
          iconHeight={20}
          iconWidth={20}
          justifyContent="space-around"
          rounded="7px"
          border="2px solid"
          borderColor="#000000"
          backgroundColorOnFocus="rgba(1, 210, 119)"
          cta={() => handlePlayVideo()}
        />
        <Button
          height="55px"
          width="115px"
          backgroundColor="rgba(62, 62, 62, .65)"
          text="Other Info"
          textColor="#fefefe"
          textSize={14}
          icon="infoIcon"
          iconHeight={20}
          iconWidth={20}
          justifyContent="space-around"
          rounded="7px"
          border="2px solid"
          borderColor="rgba(1, 210, 119)"
          backgroundColorOnFocus="#000000"
        />
      </ButtonsContainer>
    </DailyEventInfoContainer>
  );
};

export default DailyEventInfo;
