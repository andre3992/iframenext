import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css";
import "../styles/responsive.css";
import "../styles/fonts.css";

import MessengerChat from "../utils/MessengerChat";
import React, { useRef, useEffect } from "react";
import Router from "next/router";
import { GTMPageView } from "../utils/gtm";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const handleRouteChange = (url) => GTMPageView(url);
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
  let fb = useRef("fb-msgr");
  return (
    <>
      <MessengerChat pageId={"103993817624712"} ref={fb} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
