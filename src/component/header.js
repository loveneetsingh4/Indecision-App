import React from "react";
const Header=(props)=>{

return (
                 <div className="header">
                 <div className="container">
                     <h1 className="header__title">{props.Title}</h1>
                     <h2  className="header__subtitle">where is my future</h2>
                     </div>
                     </div>
            )

}

Header.defaultProps={
   Title:"Indecision"

}
export default Header;