import React, { useState, useEffect } from "react";
import { Button, InputGroup, FormControl, Form } from "react-bootstrap";
import FlipMove from "react-flip-move";
// import {library} from "@fortawesome/fontawesome-svg-core"
// import {faTrash} from "@fortawesome/free-solid-svg-icons"
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
//  library.add(faTrash);

const ToDo = () => {
  const [addinput, setAddinput] = useState([]);
  const [addeverything, setAddeverything] = useState([]);
  const [updd, setUpdd] = useState([]);
  const [isopen, setIsopen] = useState(false);
  const [updat,setUpdat] = useState("");
  //  const [theArray, setTheArray] = useState(initialArray);
  const handlechange = (e) => {
    e.preventDefault();
    if(addinput.text!==""){
    setAddeverything((addeverything) => [...addeverything, addinput]);
    console.log(addeverything);
    setAddinput("");
    }
    //setTheArray(oldArray => [...oldArray, newElement]);
  };
  

  // useEffect(() => {
    
  //   console.log("You are inside useEffect");
  // }, [updat]);

  const upd = (e, v, i) => {
    //  console.log("value is " + v +"Id is "+i);
     setIsopen(!isopen);
     console.log("The value of V is ==="+v);
     console.log("The value of updat is =="+updat);
     
      const tempupd = [...addeverything];
      tempupd.splice(i,1);
       setAddeverything(tempupd);
      setAddeverything((addeverything)=>[...addeverything,updat]);
      
      console.log("The value of add everything array is == "+addeverything);
      console.log("the value of updat is =="+updat);
  };
  
       
      
      //  tempupd.splice(i,1);
      // //  setAddeverything(tempupd);
      //  setAddeverything((tempupd)=>[...tempupd,updat]);
     
       
       
      //  setAddeverything(tempupd);
      //  setAddeverything((addeverything)=>[...addeverything,updat]);
       
       

    //   tem.join(updd)
    //   setUpdd(v);
    //   setIsopen(true);
  

  const del = (e, i) => {
    console.log(i);
    const temp = [...addeverything];
    console.log(i);
    temp.splice(i, 1); // This means start from the index and delete only one data from the array
    setAddeverything(temp);
    console.log(addeverything);
  };
  return (
    <div>
      {/* <FlipMove duration={500} easing={"ease-in-out"}> */}
      <Form onSubmit={handlechange}>
        <InputGroup className="mb-3">
          <FormControl
            type="text"
            value={addinput}
            placeholder="Enter Your ToDo List"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => setAddinput(e.target.value)}
          />

          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={handlechange}
          >
            Click Here
          </Button>
        </InputGroup>
      </Form>

      <ul className="ul">
        {addeverything.map((value, i) => (
          <li key={i} className="li">
            <InputGroup className="list">
              <InputGroup.Radio aria-label="Radio button for following text input" />

              {value}
              {/* <input type="text" onChange={(e) => setUpdd(e.target.value)} />  */}
              {isopen===true?
              <input type="text" onChange={(e)=>setUpdat(e.target.value)}/> 
              :null}
              <Button className="updbtn" variant="warning"
                onClick={(e) => {
                  upd(e, value, i);
                }}
              >
                Update
              </Button>
              {/* <FontAwesomeIcon icon="fa-trash-can" className="faicons"/> */}
              <Button  className="delbtn" variant="danger"
                onClick={(e) => {
                  del(e,i);
                }}
              >
                {" "}
                Delete{" "}
              </Button>
            </InputGroup>
          </li>
        ))}
      </ul>
      {/* </FlipMove> */}
    </div>
  );
};
export default ToDo;
