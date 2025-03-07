import React from "react";
// import WithCounter from "./Counter";
const ButtonC= ({count,increment,buttonText})=>{
console.log(buttonText)
    return(
      <button onClick={increment} count={count}>{buttonText}</button>
    )
}
export default ButtonC;