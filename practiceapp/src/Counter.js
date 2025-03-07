import React, { useState } from 'react';

const WithCounter =(WrappedComponent)=>{
    function UpgradedC(){
    const [count,setCount]=useState(0);
    const [text,setText]=useState("Click me")
    
    const clickHandler=()=>{
        setCount((prevCount)=>{
           const newCount= prevCount +1
        setText(`Button is clicked ${newCount} times`)
        return newCount
    })
    }
    return <WrappedComponent increment={clickHandler} buttonText={text} count={count}/>;
    }
return UpgradedC;   

}



export default WithCounter;

