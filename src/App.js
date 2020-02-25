import React from "react";
import "./App.css";
import Syntax from "./Syntax";
import ImageChangeOnScroll from "./ImageChangeOnScroll";
import ImageChangeOnMouseOver from "./ImageChangeOnMouseOver";

const App = () => {
 return (
  <div className="body">
   <h1>hi dear</h1>
   <ImageChangeOnMouseOver className="images" />
   <ImageChangeOnScroll />
   <Syntax />
  </div>
 );
};

export default App;
