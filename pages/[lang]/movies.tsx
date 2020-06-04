import React from "react";
import DailyEventWindow from "../../components/organisms/DailyEventWindow";
import SliderWrapper from "../../components/molecules/SliderWrapper";
import Layout from "../../components/Layout";
import withLocale from "../../hocs/withLocale";
// import styled from "styled-components";

const Movies: React.FC = () => {
  return (
    <Layout>
      <DailyEventWindow />
      <SliderWrapper />
    </Layout>
  );
};

export default withLocale(Movies);
