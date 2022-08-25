import "../styles/globals.css";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [mainData, setMainData] = useState(" ");

  return <Component {...pageProps} mainData={mainData} setMainData={setMainData} />;
}

export default MyApp;
