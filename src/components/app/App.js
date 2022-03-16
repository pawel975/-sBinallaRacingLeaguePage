import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Banner from "../banner/Banner";
import Footer from "../footer/Footer";
import Home from "../home/Home";
import Nav from "../nav/Nav";
import Standings from "../standings/Standings"
import Results from "../results/Results";
import Calendar from "../calendar/Calendar";
import Driver from "../driver/Driver";
import Map from "../map/Map";
import Records from "../records/Records";
import "./App.scss"

const App = () => {
   
   return (
      <>
         <div id="page-wrapper">

            <Banner/>
            <Nav/>
         
            <div id="content-wrapper">
               <Routes>
                  <Route exact path="/" element={<Home/>} />
                  <Route path="/standings" element={<Standings/>} />
                  <Route path="/results" element={<Results/>} />
                  <Route path="/calendar" element={<Calendar/>} />
                  <Route path="/driver" element={<Driver/>} />
                  <Route path="/map" element={<Map/>} />
                  <Route path="/records" element={<Records/>} />
               </Routes>
            </div>
            
            <Footer/>

         </div>
      </>
   )
};

export default App;