import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = ({ Component, pageProps }: any) => {
  return <Component {...pageProps} />;
};

export default App;
