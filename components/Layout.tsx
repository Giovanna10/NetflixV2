import Navigation from "./molecols/Navigation";

const Layout: React.FC = ({ children }): React.ReactElement => {
  return (
    <body
      style={{
        overflowY: "auto",
        margin: 0,
        backgroundColor: "#000000",
      }}
    >
      <Navigation />
      {children}
    </body>
  );
};

export default Layout;
