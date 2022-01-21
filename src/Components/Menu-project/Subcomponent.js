import React, { useEffect, useState } from "react";
import axios from "axios";

const Subcomponent = (props) => {
  console.log("Entire data" +props.data)
  const [subcate, setSubcate] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://stream-restaurant-menu-svc.herokuapp.com/item?category=${props.data}`
      )
      .then((response) => {
        console.log("This is to show sub-categoary " + response.data);
        setSubcate(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props]); // when we will get value from props then and then it will run 

  return (
    <div className="float-container">
      <div className="float-child">
        <h1> Items in Category : ({props.data})</h1>
        <table className="food">
          <thead>
            <tr style={{ fontSize: `30px` }}>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {subcate.map((value,index) => (
              <tr key={index}>
                <td>{value.name}</td>
                <td>
                  {value.description
                    ? value.description
                    : "--description misssing--"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Subcomponent;
