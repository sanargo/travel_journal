import React from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import data from "./data.js";
import "./App.css";

export default function App() {
  const cards = data.map((place) => {
    return <Cards key={place.title} {...place} />;
  });

  return (
    <>
      <Header />
      <section className="cards-container">{cards}</section>
    </>
  );
}
