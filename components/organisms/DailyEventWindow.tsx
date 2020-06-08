import React, { useEffect, useCallback, useState } from "react";
import Button from "../atoms/Button";
import styled from "styled-components";
import { Text } from "../atoms/Text";
import { Film } from "../../types/types";
import { getNowPlayingMovie } from "../../api/movies/nowPlaying";
import { getYoutubeVideoId } from "../../api/videos/videos";

const { IMAGE_BASE_URL } = process.env;

interface DailyEventWindowProps {
  pippo?: string;
}

interface DailyContainerProps {
  bgImg?: string;
}

const DailyEventWindowContainer = styled.div<DailyContainerProps>`
  display: flex;
  flex-direction: column;
  height: 650px;
  width: 100%;
  background-image: url(${(props) => `${IMAGE_BASE_URL}/w500/${props.bgImg}`});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 10px;
  opacity: 0.5;
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

const PlayerContainer = styled.iframe`
  width: 100%;
  height: 100%;
  transform: scale(1.8);
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
  });
  const [videoId, setVideoId] = useState<string>("");

  const getPlayingMovie = useCallback(async () => {
    setPlayingMovie(await getNowPlayingMovie());
  }, []);

  const getVideoMovie = useCallback(async () => {
    const id: string = await getYoutubeVideoId(playingMovie.id, true);
    setVideoId(id);
  }, [playingMovie.id]);

  useEffect(() => {
    getPlayingMovie();
    getVideoMovie();
  }, [getPlayingMovie, getVideoMovie]);

  return (
    <>
      <DailyEventWindowContainer bgImg={playingMovie.backdrop_path}>
        <PlayerContainer
          frameBorder="0"
          allowFullScreen
          src={`https://www.youtube.com/embed/${videoId}?controls=0&start=5&end=30&playlist=${videoId}&rel=0`}
        />
      </DailyEventWindowContainer>
      <div style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, paddingTop: 200}}>
        <TextsContainer>
          <Text size={45} weight="bold" color="#fefefe">
            {playingMovie.title}
          </Text>
          {/* <Text size={20} color="#fefefe">
          {playingMovie.overview}
        </Text> */}
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
      </div>
    </>
  );
};

export default DailyEventWindow;
