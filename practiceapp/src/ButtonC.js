import React from "react";
// import WithCounter from "./Counter";
const ButtonC= ({count,increment})=>{
    return(
      <button onClick={increment} count={count}>Clicked{count}</button>
    )
}
export default ButtonC;