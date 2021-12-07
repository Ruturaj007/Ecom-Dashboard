import React from "react";

const HocGreen = (props) => {
  return (
    <div>
      <h1 style={{ backgroundColor: "red", width: 100 }}> <props.data/> </h1>
    </div>
  );
};
export default HocGreen;
