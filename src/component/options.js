import React from "react"
import OPtion from "./option";

const Options=(props)=>{
  return (
                <div>
                  <div className="widget--header">
                    <h3 className="widget--h">Your option</h3>

                  <button 
                    className="button button--link"
                  onClick={props.handledeleteoptions}>removeall</button>

                  </div>
                  {props.option.length===0 && <p className="widget__header">please add value</p>}
                   {
                    
                  props.option.map((option,index)=> (
                  <OPtion 
                  key={option}
                   optionText={option} 
                   count={index +1}
                  handledeleteOptiond={props.handledeleteOptiond}
                  /> ))
                   }
                  
                  
                </div>
 )

}
export default Options;