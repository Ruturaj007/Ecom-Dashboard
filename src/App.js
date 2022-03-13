import "./App.css";
import React from "react";
import { Badge } from "react-bootstrap";
import ToDo from "./Components/TO DO List/ToDo";
// import PTest from "./Components/Test/PTest";
import Hoc from "./Components/Higher Order Component/Parent";
import To from "./Components/TO DO List/To";
// import Calc from "./Components/Calculator/Calculator"
import Login from "./Components/Login";
import Register from "./Components/Register";
import Addproducts from "./Components/Addproducts";
import Header from "./Components/Header";
import Products from "./Components/Products";
import { BrowserRouter, Route } from "react-router-dom";
import Updateproduct from "./Components/Updateproduct";
import MenuProject from "./Components/Menu-project/MenuProject";
import ToDoP from "./Components/TO DO List/ToDoP";
import Practise from "./Components/Practise";
import RESET from "./Components/Reset"
function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>
        Welcome <Badge bg="primary">Ruturaj</Badge>
      </h1>
      <BrowserRouter>
        <Header />
        <br />
        <Route path="/MP">
          <MenuProject />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/pra">
          <Practise />
        </Route>
        <Route path="/add">
          <Addproducts />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/update">
          <Updateproduct />
        </Route>
        <Route path="/TODO">
          <ToDo />
        </Route>
        <Route path="/TO">
          <To />
        </Route>
        <Route path="/Too">
          <ToDoP />
        </Route>
        <Route path="/HOC">
          <Hoc />
        </Route>
      </BrowserRouter>
    <RESET />
    </div>
  );
}

export default App;
