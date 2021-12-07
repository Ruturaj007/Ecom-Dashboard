import React, { useState } from "react";
const Test = (props) => {
  const [clicked, setClicked] = useState("");
  return (
    <div>
      <input type="text" onChange={(e) => setClicked(e.target.value)} />
      <button onClick={() => props.data(clicked)}>
        Send data from child to parent
      </button>
      <h1> {props.data}</h1>
    </div>
  );
};
export default Test;
