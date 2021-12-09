import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Link , Route } from "react-router-dom";
import User from "./User"

const ToDoP = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isopen, setIsopen] = useState(-1);
  const [editinput, setEditInput] = useState("");

  const add = (e) => {
    if (!input) {
      alert("Write something");
    } else {
      const newlist = {
        id: new Date().getTime().toString(),
        name: input,
      };
      console.log(" name ==>" + newlist.name + "      id =>" + newlist.id);
      setList([...list, newlist]); // Array lidho che aapne. pela no data to aave j ane nvo data input ma j type kri e e aave
      setInput("");
    }
  };

  const upd = (Ei, id) => {
    if (Ei) {
      console.log("inside Main If (1)");
      setList(
        list.map((elem) => {
          console.log("inside Main If -> inside map function (2)");
          if (elem.id === id) {
            console.log(
              "inside Main If -> inside map function -> Inside elem.id === id  (3)"
            );
            return { ...elem, name: editinput };
          }
          return elem;
        })
      );
      console.log(
        "Outside .map fucntion it will reset the edit input and setIos open will be -1 "
      );
      setEditInput("");
      setIsopen(-1);
    } else {
      if (isopen === id) {
        // If edit input box is empty it will come here and close the edit input box
        console.log("Inside Else -> If");
        setIsopen(-1);
      } else {
        // First of all it will come here because isopen === -1 and it will set the isOpen to current id of element.
        console.log("Inside Else -> Else");
        setIsopen(id);
      }
    }
  };

  const del = (id) => {
    const newdellist = list.filter((elem) => {
      return elem.id !== id;
    });
    setList(newdellist);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <Router>
      <div> {isopen} </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button variant="warning" onClick={add}>
        {" "}
        Add{" "}
      </Button>
      <ul style={{ listStyleType: "none" }}>
        {list.map((value) => {
          return (
            <li key={value.id}>
              <Link to={"/users/"+value.id+"/"+value.name}> {/*  We have added Link here and after clicking the link we will see id and name */}
              {value.name} </Link>
              
              {isopen === value.id && (
                <input
                  type="text"
                  value={editinput}
                  onChange={(e) => setEditInput(e.target.value)}
                />
              )}
              <Button
                variant="warning"
                onClick={(e) => upd(editinput, value.id)}
              >
                {" "}
                Update{" "}
              </Button>
              <Button variant="danger" onClick={(e) => del(value.id)}>
                {" "}
                Delete{" "}
              </Button>
            </li>
          );
        })}
        <Route path={"/users/:id/:name"} ><User /></Route>
      </ul>
      </Router>
      
    </div>
  );
};
export default ToDoP;
