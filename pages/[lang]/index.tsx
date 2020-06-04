import React, { useEffect } from "react";
import withLocale from "../../hocs/withLocale";
import { LocaleContext } from "../../context/LocaleContext";
import { useRouter } from "next/router";

const IndexPage: React.FC = () => {
  const router = useRouter();
  const { locale } = React.useContext(LocaleContext);
  useEffect(() => {
    router.push(`/${locale}/movies`);
  });
  return <></>;
};

export default withLocale(IndexPage);
