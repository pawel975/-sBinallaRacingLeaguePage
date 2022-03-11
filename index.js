import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import App from "./src/components/App.js";
import "./src/styles/base.scss";

const appRouting = (
  <Router>
    <Routes>
      <Route exact path="/" element={<App/>} />
    </Routes>
  </Router>
);

ReactDOM.render(appRouting, document.getElementById("root"));