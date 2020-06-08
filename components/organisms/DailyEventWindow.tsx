import React, { useEffect, useCallback, useState } from "react";
import Button from "../atoms/Button";
import styled from "styled-components";
import { Text } from "../atoms/Text";
import { Film } from "../../types/types";
import { getNowPlayingMovie } from "../../api/movies/nowPlaying";

interface DailyEventWindowProps {
  pippo?: string;
}

interface DailyContainerProps {
  bgImg?: string;
}

const {IMAGE_BASE_URL} = process.env

const DailyEventWindowContainer = styled.div<DailyContainerProps>`
  display: flex;
  flex-direction: column;
  height: 650px;
  width: 100%;
  background-image: url(${props => `${IMAGE_BASE_URL}/w500/${props.bgImg}`});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-left: 50px;
  margin-right: 50px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 30%;
  margin-top: 75px;
`;

const DailyEventWindow: React.FC<DailyEventWindowProps> = (): React.ReactElement => {
  const [playingMovie, setPlayingMovie] = useState<Film>({
    id: 0,
    release_date: "",
    overview: "",
    poster_path: "",
    backdrop_path: "",
    language: "",
    title: "",
    genre_ids: [],
  })
  const getPlayingMovie = useCallback(async() => {
    setPlayingMovie(await getNowPlayingMovie())
  }, [])

  useEffect(() => {
    getPlayingMovie()
  }, [getPlayingMovie])
  return (
    <DailyEventWindowContainer bgImg={playingMovie.backdrop_path}>
      <TextsContainer>
        <Text size={45} weight="bold" color="#fefefe">
          {playingMovie.title}
        </Text>
        <Text size={20} color="#fefefe">
          {playingMovie.overview}
        </Text>
      </TextsContainer>

      <ButtonsContainer>
        <Button
          height="55px"
          width="115px"
          backgroundColor="#fefefe"
          text="Play"
          textColor="#000000"
          textSize={14}
          icon="playIcon"
          iconHeight={20}
          iconWidth={20}
          justifyContent="space-around"
        />
        <Button
          height="55px"
          width="115px"
          backgroundColor="#fefefe"
          text="Other Info"
          textColor="#000000"
          textSize={14}
          icon="infoIcon"
          iconHeight={20}
          iconWidth={20}
          justifyContent="space-around"
        />
      </ButtonsContainer>
    </DailyEventWindowContainer>
  );
};

export default DailyEventWindow;
