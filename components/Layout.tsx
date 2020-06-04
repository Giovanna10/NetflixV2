import styled from "styled-components";
import Navigation from "./Navigation";

const LayoutComponent = styled.div`
  background-color: #000000;
  margin: 0;
`;

const Layout: React.FC = ({ children }): React.ReactElement => {
  return (
    <body style={{ overflow: "auto", margin: 0, backgroundColor: "#000000" }}>
      <LayoutComponent>
        <Navigation />
        {children}
      </LayoutComponent>
    </body>
  );
};

export default Layout;
