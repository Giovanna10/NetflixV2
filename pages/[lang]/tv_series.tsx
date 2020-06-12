import React, { useLayoutEffect, useState } from "react";
import DailyEventWindow from "../../components/organisms/DailyEventWindow";
import Slider from "../../components/organisms/Slider";
import Layout from "../../components/Layout";
import withLocale from "../../hocs/withLocale";
import LatestEvent from "../../components/organisms/LatestEvent";

const Tv_Series: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const updatePosition = () => {
    setScrollPosition(window.pageYOffset);
  };

  useLayoutEffect(() => {
    updatePosition();
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <Layout>
      <DailyEventWindow movie={false} scrollPosition={scrollPosition} />
      <Slider popularS sliderTilte="Popular Series" />
      <Slider airingS sliderTilte="Airing Today" />
      <LatestEvent movie={false} scrollPosition={scrollPosition} />
    </Layout>
  );
};

export default withLocale(Tv_Series);
