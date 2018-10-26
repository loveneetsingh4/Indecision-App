import React from "react";


export default class Addoption extends React.Component{
  constructor(props){
    super(props);
       this.handleonsubmit=this.handleonsubmit.bind(this);

       this.state={
        error: undefined

       }
  }
    state={
    error:undefined

    };
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
                  {this.state.error && <p  className="add-option-error">{this.state.error}</p>}
                  <form  className="add-option" onSubmit={this.handleonsubmit}>
                   <input  className="add-option__input" type="text" name="option" />
                   <input  className="button" type="submit" />
                  </form>
              </div>
       )
  }

}
