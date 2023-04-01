import React from "react";

const Texto = ({children, color, transform}) => {
   return <p style={{color:`${color}`, textTransform:`${transform}`}}>{children}</p> 
}

export default Texto