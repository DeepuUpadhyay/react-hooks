import React, { useEffect, useState, useRef } from "react";

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
 const [isLoading, setIsLoading] = useState(true);
 const [inView, setInView] = useState(false);
 const imageRef = useRef(null);

 const isInView = () => {
  const rect = imageRef.current.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
 };

 const scrollHanler = () => {
  setInView(() => isInView());
 };

 useEffect(() => {
  window.addEventListener("scroll", scrollHanler);
  setIsLoading(false);
  return () => {
   window.removeEventListener("scroll", scrollHanler);
  };
 }, [isLoading]);

 return isLoading ? null : (
  <div>
   <img
    src={inView ? secondaryImg : primaryImg}
    alt=""
    ref={imageRef}
    width="200"
    height="200"
   />
  </div>
 );
};

export default ImageToggleOnScroll;
