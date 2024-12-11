import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Slides/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Home></Home>
      </Router>
    </div>
  );
}

export default App;
