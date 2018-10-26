 class IndecsionApp extends React.Component {
     constructor(props) {
         super(props);
         this.handledeleteoption = this.handledeleteoption.bind(this);
         this.handlepick = this.handlepick.bind(this);
         this.handleonsubmit = this.handleonsubmit.bind(this);
         this.state = {
             options: []

         }

     }
     handledeleteoption() {
         this.setState(() => {
             return {
                 options: []

             }
         })

     }

     handlepick() {
         const random = Math.floor(Math.random() * this.state.options.length);
         const option = this.state.options[random];
         alert(option);

     }
     handleonsubmit(option) {
         if (!option) {
             return 'enter the valid value of the syntext'

         } else if (this.state.options.indexOf(option) > -1) {
             return "value already exists in the element"
         }


         this.setState((prevState) => {
             return {
                 options: prevState.options.concat(option)

             }

         })

     }
     render() {
         const Title = "Indecisions";

         return ( <
             div >
             <
             Header Title = {
                 Title
             }
             /> <
             Action hasoption = {
                 this.state.options.length > 0
             }
             handlepick = {
                 this.handlepick
             }
             /> <
             Options option = {
                 this.state.options
             }
             handledeleteoptions = {
                 this.handledeleteoption
             }
             /> <
             Addoption handleonsubmit = {
                 this.handleonsubmit
             }
             /> <
             /div>
         )

     }

 }


 class Header extends React.Component {
     render() {
         return ( <
             div >
             <
             h1 > {
                 this.props.Title
             } < /h1> <
             h2 > where is my future < /h2> <
             /div>

         )

     }
 }

 class Action extends React.Component {

     render() {
         return ( <
             div >
             <
             button onClick = {
                 this.props.handlepick
             }
             disabled = {!this.props.hasoption
             } >
             What should i do ? < /button>

                 <
                 /div>

         )

     }

 }

 class Options extends React.Component {

         render() {
             return ( <
                 div >
                 <
                 button onClick = {
                     this.props.handledeleteoptions
                 } > removeall < /button> {

                     this.props.option.map((option) => < OPtion key = {
                                 option
                             }
                             optionText = {
                                 option
                             }
                             />)
                         }

                         <
                         OPtion / >
                         <
                         /div>
                 )
             }

         }
         class OPtion extends React.Component {
             render() {
                 return ( <
                     div > {
                         this.props.optionText
                     }

                     <
                     /div>

                 )

             }

         }
         class Addoption extends React.Component {
                 constructor(props) {
                     super(props);
                     this.handleonsubmit = this.handleonsubmit.bind(this);

                     this.state = {
                         error: undefined

                     }
                 }

                 handleonsubmit(e) {
                     e.preventDefault();
                     const option = e.target.elements.option.value.trim();
                     const error = this.props.handleonsubmit(option);
                     this.setState(() => {
                         return {
                             error
                         }

                     })

                 }

                 render() {
                     return ( <
                         div > {
                             this.state.error && < p > {
                                 this.state.error
                             } < /p>} <
                             form onSubmit = {
                                 this.handleonsubmit
                             } >
                             <
                             input type = "text"
                             name = "option" / >
                             <
                             input type = "submit" / >
                             <
                             /form> <
                             /div>
                         )
                     }

                 }



                 ReactDOM.render( < IndecsionApp / > , document.getElementById("app"));