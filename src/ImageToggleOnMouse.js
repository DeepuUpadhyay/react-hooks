import React, { useRef } from "react";

const ImageToggleOnMouse = ({ primaryImg, secondaryImg }) => {
 console.log(secondaryImg, primaryImg);
 const imageRef = useRef(null);

 return (
  <div>
   <img
    src={primaryImg}
    alt=""
    onMouseOver={() => {
     imageRef.current.src = secondaryImg;
    }}
    onMouseOut={() => {
     imageRef.current.src = primaryImg;
    }}
    ref={imageRef}
   />
  </div>
 );
};

export default ImageToggleOnMouse;
