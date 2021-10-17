import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Subcomponent from "./Subcomponent";
import FlipMove from "react-flip-move";

const AllInOne = () => {
  const [maincate, setMaincate] = useState([]);
  const [subcate, setSubcate] = useState([]);

  const eventChange = (e, short_name) => {
    // e.preventDefault();
    setSubcate(short_name);
    console.log("value of subcate is " + subcate);
  };

  useEffect(() => {
    axios
      .get("https://stream-restaurant-menu-svc.herokuapp.com/category")
      .then((res) => {
        console.log("categories" + res.data);
        setMaincate(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div classNmae="float-container">
      <h1 className="Mainmenu">Menu Categories</h1>
      <ul className="float-child">
        {maincate.map((value, i) => (
          <li
            key={i}
            style={{ fontSize: `27px`, marginLeft: "20px" }}
            onClick={(e) => {
              eventChange(e, value.short_name);
            }}
          >
            {value.name}-({value.short_name})
            {/* =============>>>>>>>>>>>  why onClick={eventChange} is not working on event change when i write e.value.short_name   */}
          </li>
        ))}
      </ul>

      <Subcomponent data={subcate} />
    </div>
  );
};
export default AllInOne;
