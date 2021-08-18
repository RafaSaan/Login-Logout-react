import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./Header.css";
const Header = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <header className="header" id="header">
      <div className="logo">
        <h1>San</h1>
      </div>
      <div>
        <button onClick={() => loginWithRedirect()} className="btn-s">
          Iniciar Sesion
        </button>
      </div>
    </header>
  );
};

export default Header;
