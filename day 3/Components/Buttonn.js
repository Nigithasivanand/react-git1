import {useState} from 'react';
const Result =()=>
{
    const[da,setda]=useState(true);
    const fnc=()=>
    {
       setda(!da);
    }
    return(
     <button onClick={fnc} style={{backgroundColor : da?'green':'red'}}>submit</button>
    )
}
export default Result;