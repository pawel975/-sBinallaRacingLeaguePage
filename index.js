import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
<<<<<<< HEAD
import App from "./src/components/App.js";
import "./src/styles/base.scss";
=======

import App from "./src/components/app/App.js";
>>>>>>> refs/remotes/origin/main

const appRouting = (
  <Router>
    <Routes>
      <Route exact path="/" element={<App/>} />
    </Routes>
  </Router>
);

ReactDOM.render(appRouting, document.getElementById("root"));