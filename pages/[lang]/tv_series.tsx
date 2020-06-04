import React from "react";
import DailyEventWindow from "../../components/organisms/DailyEventWindow";
import SliderWrapper from "../../components/molecules/SliderWrapper";
import Layout from "../../components/Layout";
import withLocale from "../../hocs/withLocale";
// import styled from "styled-components";

const Tv_Series: React.FC = () => {
  return (
    <Layout>
      <DailyEventWindow />
      <SliderWrapper />
    </Layout>
  );
};

export default withLocale(Tv_Series);
