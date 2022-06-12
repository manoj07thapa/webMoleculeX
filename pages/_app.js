import "../styles/globals.css";
import "../amplifyConfig";
import { Fragment } from "react";
import Navbar from "../components/headers/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />;
    </Fragment>
  );
}

export default MyApp;
