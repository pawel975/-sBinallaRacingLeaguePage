import React from "react";
import { BrowserRouter as Route, Routes} from "react-router-dom";
import Banner from "../banner/Banner";
import Home from "../home/Home";
import Nav from "../nav/Nav";
import "./App.scss"

const App = () => {
   
   return (
      <>
         <div id="page-wrapper">
            <Banner />
            <Nav />
            <div id="content-wrapper">
               <Routes>
                  <Route exact path="/" element={<Home/>} />
               </Routes>
            </div>
            <div id="footer">
               footer
            </div>
         </div>
      </>
   )
};

export default App;