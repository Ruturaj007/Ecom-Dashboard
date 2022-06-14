import "./App.css";
import React from "react";
import { Badge } from "react-bootstrap";
import ToDo from "./Components/TO DO List/ToDo";
import Hoc from "./Components/Higher Order Component/Parent";
import To from "./Components/TO DO List/To";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Addproducts from "./Components/Addproducts";
import Header from "./Components/Header";
import Products from "./Components/Products";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Updateproduct from "./Components/Updateproduct";
import MenuProject from "./Components/Menu-project/MenuProject";
import ToDoP from "./Components/TO DO List/ToDoP";
import Practise from "./Components/Practise";
import DDAR from "./Components/Drag_And_Drop/Drag_Drop";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>
        Welcome <Badge bg="primary">Ruturaj</Badge>
      </h1>
      <BrowserRouter>
      <Header />
      <br />
        <Routes>
          <Route path="/MP" element={<MenuProject />}/>
          <Route path="/login" element={<Login  />}/>
          <Route path="/pra" element={<Practise />}/>
          <Route path="/add" element={<Addproducts />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/update" element={<Updateproduct />}/>
          <Route path="/TODO" element={<ToDo />}/>
          <Route path="/TO" element={<To />}/>
          <Route path="/Too" element={<ToDoP />}/>
          <Route path="/HOC" element={<Hoc />}/>
          <Route path="/DDR" element={<DDAR />}/>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p> 404 PAGE .There is nothing to show</p>{" "}
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
