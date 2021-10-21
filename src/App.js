import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Addproducts from "./Components/Addproducts";
import Header from "./Components/Header";
import Products from "./Components/Products"
import { BrowserRouter, Route } from "react-router-dom";
import Updateproduct from "./Components/Updateproduct";
import MenuProject from "./Components/Menu-project/MenuProject"
 import ToDo from "./Components/TO DO List/ToDo"
import Practise from './Components/Practise'
 import To from "./Components/TO DO List/To"

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Header />
       
        <br />
        <br />
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
        <Route path="/products"><Products /></Route>
        <Route path="/update">
          <Updateproduct />
        </Route>
         <Route path="/TODO"><ToDo/></Route> 
         <Route path="/TO"><To /></Route> 
      </BrowserRouter>
    </div>
  );
}

export default App;
