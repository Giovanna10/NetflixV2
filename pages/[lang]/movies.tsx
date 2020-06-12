import React, { useLayoutEffect, useState } from "react";
import DailyEventWindow from "../../components/organisms/DailyEventWindow";
import Slider from "../../components/organisms/Slider";
import Layout from "../../components/Layout";
import withLocale from "../../hocs/withLocale";
import LatestEvent from "../../components/organisms/LatestEvent";

const Movies: React.FC = () => {
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
      <DailyEventWindow movie scrollPosition={scrollPosition} />
      <Slider upcomingM sliderTilte="Upcoming Movies" />
      <Slider popularM sliderTilte="Popular Movies" />
      <LatestEvent movie scrollPosition={scrollPosition} />
    </Layout>
  );
};

export default withLocale(Movies);
