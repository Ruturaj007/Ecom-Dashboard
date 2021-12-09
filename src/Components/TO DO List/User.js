import React from "react";
import {Badge} from "react-bootstrap"
import { withRouter } from "react-router";
const User = (props) => {
  return (
    <div>
      <h1> Welcome <Badge bg="primary">{props.match.params.name}</Badge></h1> 
      <h1> Your id is {props.match.params.id}</h1>
    </div>
  );
};
export default withRouter(User);
