import React, { useState } from "react";
import "./Calc.css";
const Calculator = () => {
    const [calc,setCalc] = useState("");
    const [result,setResult] = useState("");
    const ops = ['/','*','+','-','.'];

    const updatecalc=(value)=>{
        if(
            ops.includes(value) && calc === "" || ops.includes(value) &&ops.includes(calc.slice(-1)
            )
        )return;
        setCalc(calc+value);
        if(!ops.includes(value))
        {
            setResult(eval(calc+value).toString());
        }
    }
  const createDigits = () => {
    const digits = [];
    for (let i = 0; i < 10; i++) {
      digits.push(<button onClick={()=>updatecalc(i.toString())} key={i}>{i}</button>);
    }
    return digits;
  };
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
         {result ? <span> (0) </span>:''} {calc || "0"}
          </div>
          <div className="operators">
            <button onClick={()=>updatecalc("/")}> / </button>
            <button onClick={()=>updatecalc("*")}> * </button>
            <button onClick={()=>updatecalc("+")}> + </button>
            <button onClick={()=>updatecalc("-")}> - </button>
            <button onClick={()=>updatecalc("DEL")}> DEL </button>
          </div>
          <div className="digits">
              {createDigits()}
          <button onClick={()=>updatecalc("0")}> 0 </button>
          <button onClick={()=>updatecalc(".")}> . </button>
          <button onClick={()=>updatecalc("=")}> = </button>
          </div>
      </div>
    </div>
  );
};
export default Calculator;
