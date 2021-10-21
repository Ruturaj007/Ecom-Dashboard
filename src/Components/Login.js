import React,{useState} from 'react'
import {Button,Table} from 'react-bootstrap'
import axios from "axios";

const Login=()=>{
    const [apiapi,setApiapi] = useState([])
    
    const getdata=()=>{
        
        const options = {
  method: 'GET',
  url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/',
  params: {query: 'Stockholm'},
  headers: {
    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
    'x-rapidapi-key': '085342e23dmsh37268abfaa38fb1p19abf4jsn8bd8c26fccb6'
  }
};

axios.request(options).then(function (response) {
    setApiapi(response.data);
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
}
    return(
        <div>
            <Button onClick={getdata}> Click here </Button>
           <Table>
               <tbody>
                   {apiapi.map((data,i)=> 
               <tr key={i}>
                <td>{i}</td> 
                <td>{data}</td>

                </tr>
                   )}</tbody>
           </Table>
        </div>
    )
}
export default Login