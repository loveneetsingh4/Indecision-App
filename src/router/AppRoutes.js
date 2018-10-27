import React from "react";
import {BrowserRouter,Route,Switch,Link,NavLink} from "react-router-dom";
import  ExpensDashboard from "../components/expene-route";
import Addexpense from "../components/addexpense.js";
import Editexpense  from "../components/edit-expense.js";
import help from "../components/help";
import NotpageFound from  "../components/not-page";
 import Header from "../components/header";








   const Approute=()=>(

           <BrowserRouter>
             <div>
                 <Header />
           <Switch>
           <Route path="/"  component={ExpensDashboard} exact={true}/>
           <Route path="/create"  component={Addexpense}   />
           <Route path="/edit/:id" component={Editexpense} />
           <Route path="/help" component={help} />
           <Route   component={NotpageFound} />
          </Switch>
          </div>
           </BrowserRouter>
             
   )
export default Approute;