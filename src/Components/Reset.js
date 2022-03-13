import React,{useState} from "react"

const Reset = () =>{
    const [max,setMax] = useState();
    const [min,setMin] = useState();
    const handlechange=(e)=>{
        e.preventDefault();
        setMax("");
        setMin("");
    }
  
    return (<div>
        <form onSubmit={handlechange}>
            <input type="text" placeholder="Minimum" onChange={(e) => {setMin(e.target.value)}} value={min}/>
   <br/><br/>
        <input type="text" placeholder="Maximum" onChange={(e) => {setMax(e.target.value)}} value={max}/> 
        <br/><br/>
    <button type ="reset" onClick={handlechange}> Reset </button>
        </form>
    </div>)
}
export default Reset;