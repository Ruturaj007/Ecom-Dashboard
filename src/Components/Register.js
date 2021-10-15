import React, { useEffect, useState } from "react";
import { Button, InputGroup, FormControl, Form, Table } from "react-bootstrap";
// import history from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [email, setEmail] = useState("");
  const [uid, setUid] = useState('');
  const [final, setFinal] = useState([]);
  const [getf, setGetf] = useState([]);
  // const history=useHistory();

  const submit = (e) => {
    e.preventDefault();
    let item = { name, password, title, body, uid, email };
    console.log(item);
    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, item)
      .then((response) => {
        setFinal(response.data);
        console.log(response.data);

        axios
        .get(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => {
          console.log(response.data);
          setGetf(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
        
      })
      .catch((error) => console.log(error));

    // axios
    //   .get(`https://jsonplaceholder.typicode.com/posts`)
    //   .then((response) => {
    //     console.log(response.data);
    //     setGetf(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  //       const user ={
  //           title,
  //           body,
  //           uid
  //       }
  // console.log(uid+title + body + email);
  // history.push("/add");
  // axios
  // .post(
  //   `https://react-course-b798e-default-rtdb.firebaseio.com/posts.json`,
  //   user
  // )
  // .then((response) => {
  //   onPostAdded();
  // });

  return (
    <div className="col-sm-6 offset-sm-3">
      <h1> User Registration Page</h1>
      <br />
      <Form onSubmit={submit} style={{textAlign:"center"}}>
        <InputGroup size="lg">
          <input
            className="form-control"
            type="text"
            value={uid}
            name="userId"
            onChange={(e) => setUid(e.target.value)}  //setUid() -> {'uid':'abc'}     //uid -> {'uid':'abc'} name:kjbgk
            placeholder="User Id"
          />
        </InputGroup>
        <br />
        <InputGroup size="lg">
          <input
            className="form-control"
            type="text"
            value={name}
            name="Name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name "
          />
        </InputGroup>
        <br />
        <InputGroup size="lg">
          <input
            className="form-control"
            type="text"
            value={password}
            name="Password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </InputGroup>
        <br />
        <InputGroup size="lg">
          <input
            className="form-control"
            type="text"
            value={title}
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
        </InputGroup>
        <br />
        <InputGroup size="lg">
          <input
            className="form-control"
            type="text"
            value={body}
            name="body"
            onChange={(e) => setBody(e.target.value)}
            placeholder="Body"
          />
        </InputGroup>
        <br />
        <InputGroup size="lg">
          <input
            className="form-control"
            type="text"
            value={email}
            name="Email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </InputGroup>
        <br />
        <Button  type="submit"> Click here</Button>
      </Form>
      <Table>
        <tbody>
          <tr>
            <th>Index </th>
            <th>userId</th>
            <th>Name</th>
            <th>Title</th>
            <th>Body</th>
            <th>Password</th>
          </tr>
          {getf.map((value, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{value.userId}</td>
              <td>{value.name}</td>
              <td>{value.title}</td>
              <td>{value.body}</td>
              <td>{value.password}</td>
            </tr>
          ))}{" "}
        </tbody>
      </Table>
    </div>
  );
};
export default Register;
