import React from "react";
import withLocale from "../../hocs/withLocale";
import Navigation from "../../components/Navigation";
import { Text } from "../../components/atoms/text/Text";
import SliderWrapper from "../../components/molecules/sliderWrapper/SliderWrapper";


const IndexPage: React.FC = () => {
  return (
    <div>
      <Navigation />
      <Text organismTitle>Home Page</Text>
      <SliderWrapper />
    </div>
  );
};

export default withLocale(IndexPage);
