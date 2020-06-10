import React from "react";
import DailyEventWindow from "../../components/organisms/DailyEventWindow";
import Slider from "../../components/organisms/Slider";
import Layout from "../../components/Layout";
import withLocale from "../../hocs/withLocale";

const Tv_Series: React.FC = () => {
  return (
    <Layout>
      <DailyEventWindow movie={false}/>
      <Slider popularS sliderTilte="Popular Series"/>
      <Slider airingS sliderTilte="Airing Today"/>
    </Layout>
  );
};

export default withLocale(Tv_Series);
