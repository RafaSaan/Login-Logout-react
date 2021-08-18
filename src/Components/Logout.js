import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Logout.css";
const Logout = () => {
  const { logout } = useAuth0();
  return (
    <div className="header__usuario">
      <h2>Hola!</h2>
      <button
        className="btn-lg btn-s"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Salir
      </button>
    </div>
  );
};

export default Logout;
