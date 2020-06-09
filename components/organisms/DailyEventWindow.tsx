import React, { useEffect, useCallback, useState } from "react";
import Button from "../atoms/Button";
import styled from "styled-components";
import { Text } from "../atoms/Text";
import { Film } from "../../types/types";
import { getNowPlayingMovie } from "../../api/movies/nowPlaying";
import { getYoutubeVideoId } from "../../api/videos/videos";
import ReactPlayer from "react-player";

const { IMAGE_BASE_URL } = process.env;

interface DailyEventWindowProps {
  pippo?: string;
}

interface DailyContainerProps {
  bgImg?: string;
}

const DailyEventPosterContainer = styled.div<DailyContainerProps>`
  display: flex;
  flex-direction: column;
  height: 650px;
  background-image: url(${(props) => `${IMAGE_BASE_URL}/w500/${props.bgImg}`});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.3;
  margin-top: 50px;
`;

const DailyEventVideoContainer = styled.div`
  height: 650px;
  opacity: 0.75;
  margin-top: 50px;
`;

const DailyEventInfoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin-left: 10%;
`;

const TitleContainer = styled.div`
  margin-top: 8%;
`;

const DescriptionsContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.65);
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 15%;
  margin-top: 2%;
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
  const [playVideo, setPlayVideo] = useState(false);

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

  const handlePlayVideo = () => {
    setPlayVideo(!playVideo);
  };

  return (
    <>
      {!playVideo ? (
        <DailyEventPosterContainer bgImg={playingMovie.backdrop_path} />
      ) : (
        <DailyEventVideoContainer>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            loop
            playing={playVideo}
            style={{ transform: "scale(1.8, 1.35)" }}
            height="100%"
            width="100%"
            config={{
              youtube: {
                playerVars: {
                  rel: 0,
                  mute: 1,
                  start: 5,
                  end: 20,
                },
              },
            }}
          />
        </DailyEventVideoContainer>
      )}
      <DailyEventInfoContainer>
        <TitleContainer>
          <Text
            size={40}
            weight="bold"
            color="#fefefe"
            family="Arial, Helvetica, sans-serif"
          >
            {playingMovie.title}
          </Text>
        </TitleContainer>
        <DescriptionsContainer>
          <Text
            size={16}
            weight="400"
            color="#fefefe"
            align="center"
            family="Arial, Helvetica, sans-serif"
          >
            {playingMovie.overview}
          </Text>
        </DescriptionsContainer>
        <ButtonsContainer>
          <Button
            height="55px"
            width="115px"
            backgroundColor="rgba(1, 210, 119, .65)"
            text="Play"
            textColor="#000000"
            textSize={14}
            icon="playIcon"
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
    </>
  );
};

export default DailyEventWindow;
