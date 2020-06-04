import React from "react";
import Slider from "./Slider";
import styled from "styled-components";

const SliderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

const SliderWrapper: React.FC = () => (
  <SliderContainer>
    <Slider />
  </SliderContainer>
);

export default SliderWrapper;
