import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blognav from "./components/navbar/Blognav";
import Aboutus from "./components/home/Aboutus";
import Blogs from "./components/home/Blogs";
import Gallery from "./components/home/Gallery";
function App() {
  const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
  };
  return (
      <div className="App">
        <Blognav />
        <Routes>
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Blogs" element={<Blogs/>}/>
          <Route path="/Gallery" element={<Gallery/>}/>
        </Routes>
      </div>
   
  );
}

export default App;
