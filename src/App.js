// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes


import Home from "./Camponant/Home";
import About from "./Camponant/About";
import Navbar from "./Camponant/Navbar";
import Portfolio from "./Camponant/Portfolio";
import Contact from "./Camponant/Contact";
import Resume from "./Camponant/Resume";
import Details from "./Camponant/portfolio-detail/Details";
import Details1 from "./Camponant/portfolio-detail/Details1";
import Detail2 from "./Camponant/portfolio-detail/Detail2";
import Detail3 from "./Camponant/portfolio-detail/Detail3";
import Detail4 from "./Camponant/portfolio-detail/Detail4";
import Detail5 from "./Camponant/portfolio-detail/Detail5";
import Detail6 from "./Camponant/portfolio-detail/Detail6";
import Detail7 from "./Camponant/portfolio-detail/Detail7";
import Detail8 from "./Camponant/portfolio-detail/Detail8";
import Detail9 from "./Camponant/portfolio-detail/Detail9";
import Detail10 from "./Camponant/portfolio-detail/Detail10";
import Detail11 from "./Camponant/portfolio-detail/Detail11";
import Detail12 from "./Camponant/portfolio-detail/Detail12";
import Detail13 from "./Camponant/portfolio-detail/Detail13";
import Detail14 from "./Camponant/portfolio-detail/Detail14";




function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        
        <Routes> {/* Use Routes instead of Route */}
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/details" element={<Details/>} />
          <Route path="/details1" element={<Details1/>} />
          <Route path="/detail2" element={<Detail2/>} />
          <Route path="/detail3" element={<Detail3/>} />
          <Route path="/detail4" element={<Detail4/>} />
          <Route path="/detail5" element={<Detail5/>} />
          <Route path="/detail6" element={<Detail6/>} />
          <Route path="/detail7" element={<Detail7/>} />
          <Route path="/detail8" element={<Detail8/>} />
          <Route path="/detail9" element={<Detail9/>} />
          <Route path="/detail10" element={<Detail10/>} />
          <Route path="/detail11" element={<Detail11/>} />
          <Route path="/detail12" element={<Detail12/>} />
          <Route path="/detail13" element={<Detail13/>} />
          <Route path="/detail14" element={<Detail14/>} />
          
           
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
