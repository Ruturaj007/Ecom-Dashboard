//Using Redux

import { additem, upd, del, removeall } from "../../Services/Actions/action";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { Button, InputGroup, FormControl,Form } from "react-bootstrap";
import logo from "../TO DO List/logo.jpeg";
import { BrowserRouter as Router, Link , Route } from "react-router-dom";
import User from "./User"
const ToDo = () => {
  const [addinput, setAddinput] = useState([]);
  const addeverything = useSelector((state) => state.todoReducer.addeverything); // To get all the data
  const isopen = useSelector((state)=>state.todoReducer.isOpen); // isopen ni value store mathi lavshe so ahiya aapne use kri shkiye
  
  //  const [updateId, setUpdateId] = useState([]); new item ni value updd ma nakhi che
  const [updat, setUpdat] = useState(""); // update na input box ma user type kre e aama jay

  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center" }}>
      <Router>
      <figure>
        <h1 className="todo"> To Do List</h1>
        <img className="logo" src={logo} alt="Logo" />
        <figcaption> Add your list below </figcaption>
      </figure>
      {isopen}  
      <div>{updat}</div>
      <Form onSubmit={(e)=>e.preventDefault()}>
      <InputGroup className="mb-3">
        <FormControl
          className="firstinput"
          type="text"
          value={addinput}
          placeholder="Enter Your ToDo List 📁 "
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e) => setAddinput(e.target.value)}
        />

        <Button
          variant="primary"
          className="fas fa-plus add-btn"
          onClick={() => dispatch(additem(addinput),setAddinput(""))}
        >
          Add
        </Button>
      </InputGroup>

      <ul className="ul">
        {addeverything.map((value) => {
          return (
            <li key={value.id} className="li">
               <Link to={"/users/"+value.id+"/"+value.name}> {/*  We have added Link here and after clicking the link we will see id and name */}
              {/* Here it will take id from allInputData id and name as a value whatever is stored in addinput */}
              {value.name} </Link>
              
              {/* {value.name} */}
              {isopen === value.id && (
                <input
                  type="text"
                  value={updat}
                  onChange={(e) => setUpdat(e.target.value)}
                />
              )}
              <Button
                className="updbtn fas fa-edit"
                variant="warning"
                onClick={(e) => {
                  dispatch(upd(value.id,updat),setUpdat(""));
                }}
              > Update </Button>
              <Button
                className="delbtn fas fa-trash-alt"
                variant="danger"
                onClick={(e) => {
                  dispatch(del(e, value.id));
                }}
              > Delete </Button>
            </li>
          );
        })}
         <Route path={"/users/:id/:name"} ><User /></Route>
      </ul>
      <Button
        className="remove fas fa-trash-alt"
        variant="danger"
        style={{
          marginTop: "30px",
          fontSize: "20px",
          padding: "10px 24px",
        }}
        data-sm-link-test="Remove All"
        onClick={() => dispatch(removeall())} 
      > Delete All</Button>
      </Form>
      </Router>
    </div>
  );
};
export default ToDo;
