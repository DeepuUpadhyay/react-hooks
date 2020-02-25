import React, { useEffect } from "react";

const Syntax = () => {
 useEffect(() => {
  console.log("in UseReffect");
  return () => {
   console.log("in useEffect cleanup");
  };
 }, []);
 return <div></div>;
};

export default Syntax;
