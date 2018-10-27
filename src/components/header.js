import React from "react";
import {NavLink} from "react-router-dom";


   const Header=()=>(
      <header>
        <h1>  Extensify</h1>

        <NavLink to="/" activeClassName="is-active" exact={true}>home-- page</NavLink>
        <NavLink to="/create"   activeClassName="is-active"    >add-expense</NavLink>
        
            <NavLink  to="/help" activeClassName="is-active">  Help--</NavLink>
          </header>
     

   )

   export default Header;