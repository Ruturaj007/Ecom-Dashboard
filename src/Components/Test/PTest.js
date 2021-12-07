import React, { useState } from "react";
import Test from "./Test";
const PTest = () => {
  const [abc, setAbc] = useState("");
  const clicked = (p) => {
    setAbc(p);
  };
  return (
    <div>
      <h1> {abc} </h1>
    <Test data={clicked} />
    </div>
  );
};
export default PTest;
