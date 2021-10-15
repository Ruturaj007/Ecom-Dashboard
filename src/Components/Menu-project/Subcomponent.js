import React, { useEffect, useState } from "react";
import axios from "axios";

const Subcomponent = (props) => {
  const [subcate, setSubcate] = useState([]);
  console.log("You are accessing the value of props " + props.data);

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
  },[props]);

  return (
    <div className="float-container">
      <div className="float-child">
      
       <h1> Items in Category : ({props.data})</h1>
       {/* {props.data.short_name!==null? */}
        <table className="food">
          <thead>
            <tr style={{fontSize:`30px`}}>
              <th>Name</th>
              {/* <td>Short Name</td> */}
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {console.log(
              "Checking for subcategorisssssssssssss" + props.data
            )}
            {subcate.map((value) => (
                  <tr>
                    <td>{value.name}</td> 
                    {/* <td>{value.short_name}</td> */}
                    <td>{value.description?value.description:'--description misssing--'}</td>
                    {/* <td>{value.description?value.description:'--description misssing--'}</td> */}
                    </tr>
                    
                ))
              }
          </tbody>
        </table>
{/* :"null"} */}
      </div>
    </div>
  );
};
export default Subcomponent;
