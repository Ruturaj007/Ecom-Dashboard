import React from "react";

const HocGreen=(props)=>{
    return(<div>
        <h1 style={{backgroundColor:"green",width:100}}> <props.data/> </h1> <br/><br/>
        </div>)
}
export default HocGreen