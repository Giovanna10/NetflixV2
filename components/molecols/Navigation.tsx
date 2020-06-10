import React from "react";
import { useRouter } from "next/router";
import LocaleSwitcher from "../atoms/LocaleSwitcher";
import Icon from "../atoms/Icon";
import styled from "styled-components";
import { LocaleContext } from "../../context/LocaleContext";
import Tab from "../atoms/Tab";

interface NavigationProps {
  pippo?: string;
}

const NavigatorContainer = styled.div`
 display: flex;
 flex-direction row;
 align-items: center;
 justify-content: space-between;
 position: absolute;
 right: 0;
 left: 0;
 height: 50px;
 background-color: #000000;
 z-index: 10;
`;

const NavigatorTitles = styled.div`
 display: flex;
 flex-direction row;
 align-items: center;
 justify-content: space-around;
 width: 30%;
`;

const LocaleSwitcherContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-end;
  padding-right: 2%;
`;

const Navigation: React.FC<NavigationProps> = (): React.ReactElement => {
  const router = useRouter();
  const { locale } = React.useContext(LocaleContext);
  const routeName = router.asPath.split("/")[2];

  const handleRoute = (url: string): void => {
    router.push(`/${locale}/${url}`);
  };

  return (
    <NavigatorContainer>
      <NavigatorTitles>
        <Icon name="logo" height={55} width={120} />
        <Tab
          color={routeName === "movies" ? "#01d277" : "#fefefe"}
          tabText="MOVIES"
          cta={() => handleRoute("movies")}
        />
        <Tab
          color={routeName === "tv_series" ? "#01d277" : "#fefefe"}
          tabText="TV SERIES"
          cta={() => handleRoute("tv_series")}
        />
      </NavigatorTitles>
      <LocaleSwitcherContainer>
        <LocaleSwitcher />
      </LocaleSwitcherContainer>
    </NavigatorContainer>
  );
};

export default Navigation;
