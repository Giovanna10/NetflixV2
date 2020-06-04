import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import SliderCard from "../atoms/SliderCard";
import Arrow from "../atoms/Arrow";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";
import { Movie } from "../../types/types";

const {IMAGE_BASE_URL} = process.env

const SliderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

interface SliderProps {
  movies: Movie[]
}

const Slider: React.FC<SliderProps> = ({movies}) => {
  const sliderItems = movies.map((movie) => {    
    
    return (
    <SliderCard
      width={"250px"}
      height={"130px"}
      backgroundImage={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
      videoMovieKey={movie.id}
      movieTitle={movie.original_title}
      description={movie.overview}
    />
  )});

  const carouselRef = useRef<AliceCarousel>(null);

  const slidePrev = () => carouselRef.current?.slidePrev();
  const slideNext = () => carouselRef.current?.slideNext();

  return (
    <SliderContainer>
      <Arrow slidePrev={slidePrev} />
      <AliceCarousel
        responsive={{
          0: {
            items: 5,
          },
          1024: {
            items: 7,
          },
        }}
        dotsDisabled
        duration={400}
        buttonsDisabled={true}
        ref={carouselRef}
        items={sliderItems}
        infinite
      />
      <Arrow right slideNext={slideNext} />
    </SliderContainer>
  );
};

export default Slider;
