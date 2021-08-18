import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-yzi3pcao.us.auth0.com"
      clientId="Sk73KqqzvQh0f1xZe29DUksrZdXqBR2W"
      redirectUri="https://san-websites.netlify.app//usuario"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
