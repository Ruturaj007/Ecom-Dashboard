import React, { Component } from 'react'
import {Button} from 'react-bootstrap'

export default class PC extends Component{
    constructor(){
        super();
        this.state={
            name:""
        };
    }

    
render(){
    return(<div>
        <input type="text" onSubmit={this.state.name("Hello")}/>
        <br/><br/><br/>
        {this.state.name}

        {/* <Button onClick={(e)=>this.state.n}> Click here </Button> */}
    </div>)
}
}