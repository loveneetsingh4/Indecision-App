import React from "react";
const Action=(props)=>{
   return (
              <div  >
                  < button className = "big_button"
                  onClick = {
                    props.handlepick
                  }
                     disabled={!props.hasoption}
                  >What should i do?</button>

                 </div>

   )

}
export default Action;