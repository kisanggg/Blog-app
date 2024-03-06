import {  Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Blognav from "./components/navbar/Blognav";
import Aboutus from "./components/home/Aboutus";
import Blogs from "./components/home/Blogs";
import Gallery from "./components/home/Gallery";
function App() {
  return (
    <div className="App">
      <Blognav />
    </div>
  );
}

export default App;
