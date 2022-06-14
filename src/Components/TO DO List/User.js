import React from "react";
import {Badge} from "react-bootstrap"
import { useParams } from "react-router-dom";
const User = () => {
  const {id, name} = useParams();
  console.log('ID =>',id,' name => ',name);
  return (
    <div>
        {name ==null ? alert("No data to show") :<div><h1> Welcome <Badge bg="primary">{name}</Badge></h1> 
        <h1> Your id is {id}</h1></div> }
      </div>
        
      
  );
};
export default User;
