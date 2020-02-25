import React from "react";
import img from "../public/images/stunning.png";
import flw from "../public/images/image.png";
import ImageToggleOnMouse from "./ImageToggleOnMouse";

const ImageChangeOnMouseOver = () => {
 return (
  <div>
   <ImageToggleOnMouse primaryImg={flw} secondaryImg={img} />
   <ImageToggleOnMouse secondaryImg={img} primaryImg={flw} />
  </div>
 );
};

export default ImageChangeOnMouseOver;
