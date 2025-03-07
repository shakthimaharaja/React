import React, { useState } from 'react';

const WithCounter =(WrappedComponent)=>{
    function UpgradedC(){
    const [count,setCount]=useState(0);
    
    const clickHandler=()=>{
        setCount((prevCount)=>prevCount +1);
    };

    return <WrappedComponent increment={clickHandler} count={count}/>;
}
return UpgradedC;   
}



export default WithCounter;

