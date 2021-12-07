//Using Redux

import { additem, upd, del, removeall } from "../../Services/Actions/action";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { Button, InputGroup, FormControl,Form } from "react-bootstrap";
import logo from "../TO DO List/logo.jpeg";

const ToDo = () => {
  const [addinput, setAddinput] = useState([]);
  const addeverything = useSelector((state) => state.todoReducer.addeverything); // To get all the data
  const isopen = useSelector((state)=>state.todoReducer.isOpen); // isopen ni value store mathi lavshe so ahiya aapne use kri shkiye
  
  //  const [updateId, setUpdateId] = useState([]); new item ni value updd ma nakhi che
  const [updat, setUpdat] = useState(""); // update na input box ma user type kre e aama jay

  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center" }}>
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
              {/* Here it will take id from allInputData id and name as a value whatever is stored in addinput */}
              {value.name}
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
    </div>
  );
};
export default ToDo;


  // const additem = (e) => {
  //   e.preventDefault();
  //   if (!addinput) {
  //     alert("Please write something in input box ");
  //   } else {
  //     const allInputData = {
  //       id: new Date().getTime().toString(), // Here we are saying that new data that will come it will have id and name .
  //       name: addinput, //in id date.gettime will return time in milisecond and we are converting it to string
  //     };
  //     setAddeverything([...addeverything, allInputData]);
  //     setAddinput("");
  //   }};

  //Step-1 Get the id and name of the data which user clicked to edit
  //Step-2 Compare the id where user is clicking and show the edit input box
  //Step-3 Now update the value of addinput with the new updated value to edit
  //step-4 To pass the current element Id to new state variable for reference
  //here v is newdata's name and i is new data's id . Starting value of isopen is -1

  // const upd = (e, v, i) => {
  //   if (updat) {
  //     setAddeverything(
  //       addeverything.map((elem) => {
  //         if (elem.id === updateId) {
  //           return { ...elem, name: updat };
  //         }
  //         return elem;
  //       })
  //     );
  //     setUpdat("");
  //     setUpdateId(null);
  //     setIsopen(-1);
  //   } else {
  //     if (isopen === i) {
  //       setIsopen(-1);
  //     } else {
  //       setUpdateId(i);
  //       setIsopen(i);
  //     }
  //   }};

  // const del = (e, i) => {
  //   const updateditems = addeverything.filter((elem) => {
  //     return elem.id !== i;
  //   });
  //   setAddeverything(updateditems);
  // };

  // 2nd option of deleting
  // const temp = [...addeverything];
  // temp.splice(i, 1); // This means start from the index and delete only one data from the array
  //setAddeverything(temp);

  // const removeall = () => {
  //   setAddeverything([]);
  // };

  
