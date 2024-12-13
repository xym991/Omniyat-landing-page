import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Slides/Home";
import Carousel from "./Slides/Carousel";
import carouselData from "./utils/carouselData";

function App() {
  return (
    <div className="_App">
      <Router>
        <Home></Home>
        <Carousel items={carouselData}></Carousel>
      </Router>
    </div>
  );
}

export default App;
