import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./Perfil.css";
const Perfil = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="perfil">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p className="aviso">Este es tu perfil de usuario</p>
      </div>
    )
  );
};

export default Perfil;
