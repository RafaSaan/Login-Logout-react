import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import HeroInfo from "../Components/HeroInfo";
import More from "../Components/More";
import "./Inicio.css";

const Inicio = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <HeroInfo />
      <More />
    </div>
  );
};

export default Inicio;
