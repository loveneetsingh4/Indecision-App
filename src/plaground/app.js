 class IndecsionApp extends React.Component{
   constructor(props){
      super(props);
      this.handledeleteoption=this.handledeleteoption.bind(this);
      this.handlepick=this.handlepick.bind(this);
      this.handleonsubmit=this.handleonsubmit.bind(this);
      this.handledeleteOptiond=this.handledeleteOptiond.bind(this);
      this.state={
         options:props.options

      }

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

    handledeleteoption(){
      this.setState(()=>({options:[]}));
    }
     handledeleteOptiond(optiontoremove){
      this.setState((prevState)=>({
              options:prevState.options.filter((option)=>{
               return optiontoremove !== option;

              })

      }))

     }
    handlepick(){
     const random = Math.floor(Math.random() * this.state.options.length);
     const option = this.state.options[random];
     alert(option);

    }
    handleonsubmit(option){
    if(!option){
    return 'enter the valid value of the syntext'

    }else if(this.state.options.indexOf(option)>-1){
      return "value already exists in the element"
    }
    
      this.setState((prevState)=>({options:prevState.options.concat(option)}))
    

    }
   render(){
       //const Title="Indecisions";
       
        return (
            <div>
            
          <Header />
           <Action 
            hasoption={this.state.options.length>0}
              handlepick={this.handlepick}
           />
             <Options 
             option={this.state.options}
               handledeleteoptions={this.handledeleteoption}
               handledeleteOptiond={this.handledeleteOptiond}
             />
            <Addoption  
             handleonsubmit={this.handleonsubmit}
            />
              </div>
        )

   }

}
IndecsionApp.propsDefault={
   options:[]

}

const Header=(props)=>{

return (
                 <div>
                     <h1>{props.Title}</h1>
                     <h2>where is my future</h2>
                     </div>

            )

}

Header.defaultProps={
   Title:"some valy"

}
// class Header extends React.Component{
//   render(){
//             return (
//                  <div>
//                      <h1>{this.props.Title}</h1>
//                      <h2>where is my future</h2>
//                      </div>

//             )
            
//   }
// }

const Action=(props)=>{
   return (
 <div>
                  <button   onClick={props.handlepick}
                     disabled={!props.hasoption}
                  >What should i do?</button>

                 </div>

   )

}

// class Action extends React.Component{

//    render(){
//            return (
//              <div>
//                   <button   onClick={this.props.handlepick}
//                      disabled={!this.props.hasoption}
//                   >What should i do?</button>

//                  </div>

//            )

//    }

// }
const Options=(props)=>{
  return (
                <div>
                  <button onClick={props.handledeleteoptions}>removeall</button>
                  {props.option.length===0 && <p>please add value</p>}
                   {
                    
                  props.option.map((option)=> (
                  <OPtion 
                  key={option}
                   optionText={option} 
                  handledeleteOptiond={props.handledeleteOptiond}
                  /> ))
                   }
                  
                  
                </div>
 )

}
// class Options extends React.Component{
       
//   render(){
//                return (
//                 <div>
//                   <button onClick={this.props.handledeleteoptions}>removeall</button>
//                    {
                    
//                   this.props.option.map((option)=> <OPtion key={option} optionText={option} />)
//                    }
                  
//                     <OPtion />
//                 </div>
//  )
//                 }

// }
const OPtion=(props)=>{
   return (
       <div>
    {props.optionText}
          <button 
          onClick={(e)=>{
            props.handledeleteOptiond(props.optionText)}
          }
            >remove</button>
           </div>

    )
}
// class OPtion extends React.Component{
//   render(){
//     return (
//        <div>
//  { this.props.optionText}
          
//            </div>

//     )

//   }

// }
class Addoption extends React.Component{
  constructor(props){
    super(props);
       this.handleonsubmit=this.handleonsubmit.bind(this);

       this.state={
        error: undefined

       }
  }

  handleonsubmit(e){
     e.preventDefault();
     const option=e.target.elements.option.value.trim();

     const error = this.props.handleonsubmit(option);
     this.setState(()=>({error}));

    if (!error) {

      e.target.elements.option.value = "";
    }
  
  }

  render(){
       return (
              <div>
                  {this.state.error && <p>{this.state.error}</p>}
                  <form onSubmit={this.handleonsubmit}>
                   <input type="text" name="option" />
                   <input type="submit" />
                  </form>
              </div>
       )
  }

}



ReactDOM.render(<IndecsionApp  options={[]} />,document.getElementById("app"));