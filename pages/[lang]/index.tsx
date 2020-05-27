import React from "react";
import withLocale from "../../hocs/withLocale";
import Navigation from "../../components/Navigation";

const IndexPage: React.FC = () => {
  return (
    <div>
      <Navigation />
      <h1>Home Page</h1>
    </div>
  );
};

export default withLocale(IndexPage);
