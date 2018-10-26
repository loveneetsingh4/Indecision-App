import React from "react";



const OPtion=(props)=>{
   return (
       <div className="option">

   <p  className="option__text">{props.count}.{props.optionText}</p>
          <button className="button button--link"
          onClick={(e)=>{
            props.handledeleteOptiond(props.optionText)}
          }
            >remove</button>
           </div>

    )
}
export default OPtion;