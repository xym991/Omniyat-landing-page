import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Slides/Home";
import Carousel from "./Slides/Carousel";
import {
  carouselHome,
  galleryHome,
  homeCards,
  masterpieces,
  partners,
} from "./utils/content";
import Section from "./Slides/Section";
import MidSection from "./Slides/MidSection";
import CardsGallery from "./Slides/CardsGallery";

function App() {
  return (
    <div className="_App">
      <Router>
        <Home></Home>
        <Carousel items={carouselHome}></Carousel>
        <Section data={masterpieces} />

        <MidSection items={galleryHome} />
        <Section data={partners} />
        <CardsGallery items={homeCards} />
      </Router>
    </div>
  );
}

export default App;
