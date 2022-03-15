import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import App from "./src/components/app/App.js";
import "./src/components/app/App.scss";

const appRouting = (
  <Router>
    <Routes>
      <Route exact path="/" element={<App/>} />
    </Routes>
  </Router>
);

ReactDOM.render(appRouting, document.getElementById("root"));