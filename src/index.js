import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import SampleComponent from "@nate.fleming/samplepackage";
import "./index.css";
import Test from "./components/Test";

ReactDOM.render(
  <Router>
    <div>
      <SampleComponent />
      <Test />
    </div>
  </Router>,
  document.getElementById("root")
);
