import React from "react";
import "../App.css";
import SliderContent from "./SliderContent";
import Content from "./Content";
import FormSection from "./FormSection";
import Structural from "./Structural";
import MapContent from "./MapContent";

const Home = () => {
  return (
    <div className="App">
      <Content />
      <SliderContent />
      <Structural />
      <FormSection />
      <MapContent />
    </div>
  );
};

export default Home;
