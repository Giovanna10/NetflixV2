import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import SliderCard from "../atoms/SliderCard";
import Arrow from "../atoms/Arrow";
import { images } from "../../assets/images";
import "react-alice-carousel/lib/alice-carousel.css";

const Slider: React.FC = () => {
  const sliderItems = images.map((image) => (
    <SliderCard
      width={"300px"}
      height={"200px"}
      backgroundImage={image}
    />
  ));

  const carouselRef = useRef<AliceCarousel>(null);

  const slidePrev = () => carouselRef.current?.slidePrev();
  const slideNext = () => carouselRef.current?.slideNext();

  return (
    <>
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
      />
      <Arrow right slideNext={slideNext} />
    </>
  );
};

export default Slider;
