import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import { Film } from "../../types/types";
import { getNowPlayingMovie } from "../../api/movies/nowPlaying";
import { getYoutubeVideoId } from "../../api/videos/videos";
import DailyEventInfo from "../molecols/DailyEventInfo";
import DailyEventVideo from "../molecols/DailyEventVideo";
import { getSerieOnTheAir } from "../../api/tv/onTheAir";

const { IMAGE_BASE_URL } = process.env;

interface DailyEventWindowProps {
  scrollPosition: number;
  movie: boolean;
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

const DailyEventWindow: React.FC<DailyEventWindowProps> = ({
  movie,
  scrollPosition,
}): React.ReactElement => {
  const [playing, setPlaying] = useState<Film>({
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
    setPlaying(await getNowPlayingMovie());
  }, []);

  const getAiringSerie = useCallback(async () => {
    setPlaying(await getSerieOnTheAir());
  }, []);

  const getVideoId = useCallback(async () => {
    const id: string = await getYoutubeVideoId(playing.id, movie);
    setVideoId(id);
  }, [playing.id]);

  const handlePlayVideo = () => {
    setPlayVideo(!playVideo);
  };

  useEffect(() => {
    movie ? getPlayingMovie() : getAiringSerie();
    getVideoId();
  }, [movie, getPlayingMovie, getAiringSerie, getVideoId]);

  useEffect(() => {
    scrollPosition < 300 ? setPlayVideo(true) : setPlayVideo(false);
  }, [scrollPosition]);

  return (
    <>
      {!playVideo ? (
        <DailyEventPosterContainer bgImg={playing.backdrop_path} />
      ) : (
        <DailyEventVideo playVideo={playVideo} videoId={videoId} />
      )}
      <DailyEventInfo
        playVideo={playVideo}
        title={playing.title}
        overview={playing.overview}
        handlePlayVideo={handlePlayVideo}
      />
    </>
  );
};

export default DailyEventWindow;
