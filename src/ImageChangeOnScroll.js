import React from "react";
import img from "../public/images/stunning.png";
import flw from "../public/images/image.png";
import colored from "../public/images/colored.jpg";
import colored1 from "../public/images/colored1.jpg";
import ImageToggleOnScroll from "./ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
 const primaryImages = [img, flw, img, flw];
 const secondaryImages = [colored, colored1, colored, colored1];

 return (
  <div>
   {primaryImages.map((image, index) => {
    return (
     <div key={index}>
      <ImageToggleOnScroll
       primaryImg={image}
       secondaryImg={secondaryImages[index]}
       alt=""
      />
     </div>
    );
   })}
  </div>
 );
};

export default ImageChangeOnScroll;
