import React from "react";
 const Editexpense=(props)=>{
    console.log(props);
            return (
     <div>
         the page with id {props.match.params.id}

     </div>
   ) 
 }
 export default Editexpense;