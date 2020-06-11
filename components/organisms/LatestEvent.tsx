import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { Film } from "../../types/types";
import { getYoutubeVideoId } from "../../api/videos/videos";
import ReactPlayer from "react-player";
import { Text } from "../atoms/Text";
import { getTopRatedMovies } from "../../api/movies/topRated";
import { getTopRatedSeries } from "../../api/tv/topRated";

interface LatestEventProps {
  movie?: boolean;
  scrollPosition: number;
}

const LatestEventContainer = styled.div`
  height: 550px;
  display: flex;
  flex-direction: row;
`;

const HideVideoTitle = styled.div`
  background-color: #000000;
  height: 80px;
  width: 70%;
  position: absolute;
`;

const InfoContainer = styled.div`
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5%;
  width: 30%;
`;

const DescriptionContainer = styled.div`
  width: 60%;
`;

const LatestEvent: React.FC<LatestEventProps> = ({ movie, scrollPosition }) => {
  const [latestEvent, setLatestEvent] = useState<Film>({
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
  const [playingVideo, setPlayingVideo] = useState<boolean>(false);


  const getTopMovie = useCallback(async () => {
    const latestMovie = await getTopRatedMovies();
    setLatestEvent(latestMovie[0]);
  }, []);

  const getTopSerie = useCallback(async () => {
    const latestSerie = await getTopRatedSeries();
    setLatestEvent(latestSerie[0]);
  }, []);

  const getVideoMovie = useCallback(async () => {
    const boolean = movie ? true : false;
    const id = await getYoutubeVideoId(latestEvent?.id, boolean);
    setVideoId(id);
    console.log("VIDEO ID: ", videoId);
  }, [latestEvent.id]);


  useEffect(() => {
    movie ? getTopMovie() : getTopSerie();
    getVideoMovie();
  }, [movie, getTopMovie, getTopSerie, getVideoMovie]);

  useEffect(() => {
    scrollPosition > 563
      ? setPlayingVideo(true)
      : setPlayingVideo(false);
  }, [scrollPosition]);  
  
  return (
    <LatestEventContainer>
      <>
        <HideVideoTitle />
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          height="100%"
          width="70%"
          playing={playingVideo}
          light={!playingVideo}
          style={{ marginLeft: "3%", marginBottom: "3%" }}
          config={{
            youtube: {
              playerVars: {
                rel: 0,
                start: 5,
                end: 30,
                modestbranding: 1,
                mute: 1,
              },
            },
          }}
        />
      </>

      <InfoContainer>
        <Text
          size={25}
          color="red"
          family="Arial, Helvetica, sans-serif"
          weight="bold"
        >
          {latestEvent.title?.toUpperCase()}
        </Text>
        <DescriptionContainer>
          <Text
            size={16}
            color="#fefefe"
            family="Arial, Helvetica, sans-serif"
            weight="400"
          >
            {latestEvent.overview}
          </Text>
        </DescriptionContainer>
      </InfoContainer>
    </LatestEventContainer>
  );
};

export default LatestEvent;
