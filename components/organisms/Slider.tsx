import React, { useRef, useState, useEffect, useCallback } from "react";
import AliceCarousel from "react-alice-carousel";
import SliderCard from "../atoms/SliderCard";
import Arrow from "../atoms/Arrow";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";
import { Film } from "../../types/types";
import { Text } from "../atoms/Text";
import { getPopularMovie } from "../../api/movies/popular";
import { getUpcomingMovie } from "../../api/movies/upcoming";
import { getPopularSeries } from "../../api/tv/popular";
import { getAiringTodayTvSeries } from "../../api/tv/airingToday";

const { IMAGE_BASE_URL } = process.env;

const SliderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-top: 45px;
`;

const TitleContainer = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  z-index: 10;
`;

interface SliderProps {
  upcomingM?: boolean;
  popularM?: boolean;
  airingS?: boolean;
  popularS?: boolean;
  sliderTilte?: string;
}

const Slider: React.FC<SliderProps> = ({
  upcomingM,
  popularM,
  airingS,
  popularS,
  sliderTilte,
}): React.ReactElement => {
  const [films, setFilms] = useState<Film[]>([]);
  const [isOver, setIsOver] = useState<boolean>(false);
  const isMovie = upcomingM || popularM ? true : airingS || (popularS && false);

  const getFilms = useCallback(async () => {
    const popularsMovies = await getPopularMovie();
    const upcomingMovies = await getUpcomingMovie();
    const popularSeries = await getPopularSeries();
    const airingSeries = await getAiringTodayTvSeries();
    setFilms(
      upcomingM
        ? upcomingMovies
        : popularM
        ? popularsMovies
        : airingS
        ? airingSeries
        : popularS
        ? popularSeries
        : []
    );
  }, []);

  useEffect(() => {
    getFilms();
  }, [getFilms]);

  const carouselRef = useRef<AliceCarousel>(null);

  const slidePrev = () => {
    carouselRef.current?.slidePrev();
  };
  const slideNext = () => {
    carouselRef.current?.slideNext();
  };

  const items = films.map((movie: Film) => {
    return (
      <SliderCard
        width={"250px"}
        height={"130px"}
        backgroundImage={`${IMAGE_BASE_URL}/w200/${movie.backdrop_path}`}
        videoMovieKey={movie.id}
        movieTitle={movie.title}
        description={movie.overview}
        isMovie={isMovie}
      />
    );
  });

  return (
    <>
      <TitleContainer>
        <Text
          size={20}
          color="#fefefe"
          weight={600}
          marginLeft="0.8em"
          marginTop="0.5em"
          marginBottom="0.5em"
        >
          {sliderTilte}
        </Text>
      </TitleContainer>
      <SliderContainer
        onMouseOver={() => setIsOver(true)}
        onMouseLeave={() => setIsOver(false)}
      >
        <Arrow slidePrev={slidePrev} show={isOver} />
        <AliceCarousel
          responsive={{
            0: {
              items: 8,
            },
            1024: {
              items: 8,
            },
          }}
          dotsDisabled
          duration={400}
          buttonsDisabled={true}
          ref={carouselRef}
          items={items}
          infinite
        />
        <Arrow right slideNext={slideNext} show={isOver} />
      </SliderContainer>
    </>
  );
};

export default Slider;
