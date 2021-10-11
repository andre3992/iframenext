import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css";
import "../styles/responsive.css";
import "../styles/fonts.css";

import React, { useEffect } from "react";
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
  return (
    <>
      <Component {...pageProps} />
      <script src="../helpMethods/iframeResizer.contentWindow.min.js"></script>
    </>
  );
}

export default MyApp;
