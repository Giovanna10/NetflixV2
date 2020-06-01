import React from "react";
import withLocale from "../../hocs/withLocale";
import Navigation from "../../components/Navigation";
import SliderWrapper from "../../components/molecules/sliderWrapper/SliderWrapper";
import DailyEventWindow from "../../components/organisms/DailyEventWindow";

const IndexPage: React.FC = () => {
  return (
    <body style={{overflow: 'auto'}}>
      <Navigation />
      <DailyEventWindow />
      <SliderWrapper />
    </body>
  );
};

export default withLocale(IndexPage);
