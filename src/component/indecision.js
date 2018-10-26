import React from "react";
import Addoption from "./add_option";
import Header from "./header";
import Action from "./action";
import Options from "./options";
import OptionModal from "./modal";



 export default class IndecsionApp extends React.Component{
   state ={
    options:[],
    slectedoption:undefined
     
   }

      handledeleteoption=()=> {
        this.setState(() => ({
          options: []
        }));
      };
      handleclear=()=>{
           this.setState(()=>({
              slectedoption: undefined 

           }))

      }
      handledeleteOptiond=(optiontoremove)=> {
        this.setState((prevState) => ({
          options: prevState.options.filter((option) => {
            return optiontoremove !== option;

          })

        }))

      };
      handlepick=()=> {
        const random = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[random];
        this.setState(()=>({
           slectedoption:option
        }))

      };
      handleonsubmit=(option)=> {
        if (!option) {
          return 'enter the valid value of the syntext'

        } else if (this.state.options.indexOf(option) > -1) {
          return "value already exists in the element"
        }

        this.setState((prevState) => ({
          options: prevState.options.concat(option)
        }))


      };

   componentDidMount(){
     try {
       const json = localStorage.getItem('options');
       const options = JSON.parse(json);
       if (options) {
         this.setState(() => ({ options }));
       }
     } catch (error) {
       
     }
   

     
  }
   componentDidUpdate(prevProps,prevState){
     if(prevState.options.length!==this.state.options.length){
        const json=JSON.stringify(this.state.options)
        localStorage.setItem("options",json);
      }
     
   }
   componentWillUnMount(){
     console.log("unmounting data")
   }


   render(){
       //const Title="Indecisions";
       
        return (
            <div>
            
          <Header />
          <div className="container">
            
           <Action 
            hasoption={this.state.options.length>0}
              handlepick={this.handlepick}
           />
         <div className = "widget" >
             <Options 
             option={this.state.options}
               handledeleteoptions={this.handledeleteoption}
               handledeleteOptiond={this.handledeleteOptiond}
               />
             
             
            <Addoption  
             handleonsubmit={this.handleonsubmit}/>
             </div>
            
            </div>
            <OptionModal  
            slectedoption={this.state.slectedoption}
             handleclear={this.handleclear}
            />
              </div>
        )

   }

}

