import React from 'react'
import {useState,useEffect} from 'react'
import {Button,Form} from 'react-bootstrap'

const Practise=()=>{
    const[name,setName]=useState("");
    const[address,setAddress]=useState("");
    const[hide,setHide]=useState(true);

    const handlechange=(e)=>{
        e.preventDefault();

    }
    return(
        <div>
            <Button onClick={()=>setHide(!hide)}> Click here to hide and show</Button>
            { hide===true?
        <Form onSubmit={()=>handlechange}>
            <input type="text" name="name"  onChange={(e)=>setName(e.target.value)}/>
            <span>You entered name as = {name}</span>
            <Button onClick={()=>setAddress(`${name}+This is my address and you already know my name ha ha ha`)}> Click here to show my address</Button>
            <span>Your address is = {address}</span>
        </Form>
:<h1>null</h1> }
        </div>
    )
}
export default Practise