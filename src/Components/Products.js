import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table,Button } from "react-bootstrap";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [hide,setHide]=useState(true);
  
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log("The value of Response is " + response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
     <div> 
       {/* style={{color:Math.random()<0.5?"green":"red"> */}
     <Table striped bordered hover variant="dark"  > 
    <thead>
    <tr>
            
            <td> ID </td>
            <td> Name </td>
            <td>Username </td>
            <td>Email</td>
            <td> Street </td>
                <td>Suite </td>
                <td>City </td>
                <td>Zip Code </td>
            </tr>
   </thead>
        <tbody style={{color:Math.random()<0.5?"green":"red"}}>
        
          
          {products.map((oho, i) => {
            
            return (
              <tr key={oho.i}>
                <td>{i}</td>
                <td>{oho.name}</td>
                <td>{oho.username}</td>
                <td>{oho.email}</td>
                <td> 
                  {oho.address.street}</td>
                  <td>{oho.address.suite}</td>
                  <td>{oho.address.city}</td>
                  <td>{oho.address.zipcode}</td>
                </tr> );
            
          })}
        </tbody> </Table> </div>       ) }
      
      

      {/* <Button onClick={()=>setHide(!hide)}> Hide / Show</Button>
     {hide===true?
      
       products.map((data, i) => {
        return(
          
          <div style={{color:Math.random()<0.5?"green":"red"}} key={i}> <hr/>
            <h1>Id :=: {i}</h1>
            <h1>Name:=: {data.name}</h1>
            <h2>Username:=: {data.username}</h2>
            <h3>Email:=:{data.email}</h3>
          <div>
           <h1> Street  :=: {data.address.street}</h1>
                <h2> City  :=: {data.address.city}</h2>
                <h3>  {data.address.suite}</h3>
                <h4> Zipcode :=: {data.address.zipcode}</h4>
                </div>
              </div>
            
         

        
       ) }) 
       :<div><br/><h1>"Data is hidden click button to see the results"</h1></div>} */}

        

export default Products;
