import React, { useState } from "react";
import { Button, InputGroup, FormControl, Form } from "react-bootstrap";
import logo from "../TO DO List/logo.jpeg";
const ToDo = () => {
  const [addinput, setAddinput] = useState([]);
  const [addeverything, setAddeverything] = useState([]);
  const [updd, setUpdd] = useState([]); // new item ni value updd ma nakhi che
  const [isopen, setIsopen] = useState(-1);
  const [updat, setUpdat] = useState(""); // update na input box ma user type kre e aama jay

  const handlechange = (e) => {
    e.preventDefault();
    if (!addinput) {
      alert("Write something");
    }
    const allInput = {
      id: new Date().getUTCMilliseconds().toString(),
      name: addinput,
    };
    setAddeverything((addeverything) => [...addeverything, allInput]);
    setAddinput("");
  };

  const upd = (e, v, i) => {
    if (updat) {
      console.log("Inside If ==>" + isopen);
      setAddeverything(
        addeverything.map((elem) => {
          if (elem.id === updd) {
            return { ...elem, updat };
          }

          return elem;
        })
      );
      setUpdat("");
      setUpdd(null);
      setIsopen(-1);
    } else {
      // when we haven't wrote anything in edit input box
      if (isopen === i) {
        console.log("inside Else =>> If " + isopen);
        setIsopen(-1);
      } else {
        console.log("inside Else =>> Else " + isopen);
        setUpdd(i);
        setIsopen(i);
      }
    }
  };

  const del = (e, i) => {
    const del = addeverything.filter((elem) => {
      return elem.id !== i;
    });
    setAddeverything(del);
  };

  const removeall = () => {
    setAddeverything([]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <figure>
        <h1 className="todo"> To Do List</h1>
        <img className="logo" src={logo} alt="Logo" />
        <figcaption> Add your list below </figcaption>
      </figure>

      <Form onSubmit={handlechange}>
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
            variant="outline-secondary"
            className="fas fa-plus add-btn"
            onClick={handlechange}
          >
            Click Here
          </Button>
        </InputGroup>
      </Form>
      <ul className="ul">
        {addeverything.map((value) => (
          <li key={value.id} className="li">
            {value.name}
            {isopen === value.id && (
              <input
                type="text"
                // name={updat}
                value={updat}
                onChange={(e) => setUpdat(e.target.value)}
              />
            )}
            <Button
              className="updbtn fas fa-edit"
              variant="warning"
              onClick={(e) => {
                upd(e, value.name, value.id);
              }}
            ></Button>

            <Button
              className="delbtn fas fa-trash-alt"
              variant="danger"
              onClick={(e) => {
                del(e, value.id);
              }}
            ></Button>
          </li>
        ))}
      </ul>
      <Button
        className="remove fas fa-trash-alt"
        style={{
          backgroundColor: "#f44336",
          marginTop: "30px",
          fontSize: "20px",
          padding: "10px 24px",
        }}
        data-sm-link-test="Remove All"
        onClick={removeall}
      ></Button>
    </div>
  );
};
export default ToDo;
