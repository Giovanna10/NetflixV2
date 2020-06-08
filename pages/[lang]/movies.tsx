import React from "react";
import DailyEventWindow from "../../components/organisms/DailyEventWindow";
import Slider from "../../components/organisms/Slider";
import Layout from "../../components/Layout";
import withLocale from "../../hocs/withLocale";

const Movies: React.FC = () => {
  return (
    <Layout>
      <DailyEventWindow />
      <Slider upcomingM sliderTilte="Upcoming Movies"/>
      <Slider popularM sliderTilte="Popular Movies"/>
    </Layout>
  );
};

export default withLocale(Movies);
