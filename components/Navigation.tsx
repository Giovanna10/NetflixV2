import React from "react";
import { useRouter } from "next/router";
// import useTranslation from '../hooks/useTranslation'
import LocaleSwitcher from "./LocaleSwitcher";
import Icon from "./atoms/Icon";
import styled from "styled-components";
import { Text } from "./atoms/Text";
import { LocaleContext } from "../context/LocaleContext";

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
  // const { locale, t } = useTranslation()
  const router = useRouter();
  const { locale } = React.useContext(LocaleContext);
  const RouteName = router.asPath.split("/")[2];
  const MoviesRouteName = "movies";
  const TvSeriesRouteName = "tv_series";

  const handleRoute = (url: string): void => {
    router.push(`/${locale}/${url}`);
  };

  return (
    <NavigatorContainer>
      <NavigatorTitles>
        <Icon name="logo" height={55} width={120} />
        <Text
          size={13}
          weight="bold"
          color={RouteName === MoviesRouteName ? "#01d277" : "#fefefe"}
          family="Arial, Helvetica, sans-serif"
          decoration="none"
          cursor="pointer"
          onClick={() => handleRoute("movies")}
        >
          MOVIES
        </Text>
        <Text
          size={13}
          weight="bold"
          color={RouteName === TvSeriesRouteName ? "#01d277" : "#fefefe"}
          family="Arial, Helvetica, sans-serif"
          decoration="none"
          cursor="pointer"
          onClick={() => handleRoute("tv_series")}
        >
          TV SERIES
        </Text>
      </NavigatorTitles>
      <LocaleSwitcherContainer>
        <LocaleSwitcher />
      </LocaleSwitcherContainer>
    </NavigatorContainer>
  );
};

export default Navigation;
