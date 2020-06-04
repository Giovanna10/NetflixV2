import React, { useState, useEffect, useCallback } from "react";
import Slider from "./Slider";
import styled from "styled-components";
import { Text } from "../atoms/Text";
import { getPopularMovie } from "../../api/popular";
import { Movie } from "../../types/types";
import { getUpcomingMovie } from "../../api/upcoming";

const SliderContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const SliderWrapper: React.FC = () => {
  const [popularMovie, setPopulars] = useState<Movie[]>([]);

  const [upcomingMovie, setUpcoming] = useState<Movie[]>([]);
  const getPopulars = useCallback(async () => {
    const populars = await getPopularMovie();
    setPopulars(populars);
  }, []);
  const getUpcoming = useCallback(async () => {
    const upcoming = await getUpcomingMovie();
    setUpcoming(upcoming);
  }, []);

  useEffect(() => {
    getPopulars();
    getUpcoming();
  }, [getPopulars, getUpcoming]);

  return (
    <SliderContainer>
      <Text
        size={20}
        color="#fefefe"
        weight={600}
        style={{ marginLeft: "0.8em" }}
      >
        Popular
      </Text>
      <Slider movies={popularMovie} />
      <Text
        size={20}
        color="#fefefe"
        weight={600}
        style={{ marginLeft: "0.8em" }}
      >
        Upcoming
      </Text>
      <Slider movies={upcomingMovie} />
    </SliderContainer>
  );
};

export default SliderWrapper;
