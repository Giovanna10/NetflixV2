import Navigation from "./Navigation";

const Layout: React.FC = ({ children }): React.ReactElement => {
  return (
    <body style={{ overflow: "auto", margin: 0, backgroundColor: "#000000" }}>
        <Navigation />
        {children}
    </body>
  );
};

export default Layout;
