import React from "react";
import Logout from "../Components/Logout";
import Perfil from "../Components/Perfil";
import "./Usuario.css";
const Usuario = () => {
  return (
    <div className="usuario">
      <Logout />
      <Perfil />
    </div>
  );
};

export default Usuario;
