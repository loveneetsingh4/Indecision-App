console.log("app is running ")

var app={
   title:"Indecsion",
    subtitle:"this isan appp",
     options:[],
     age:20
}
const onformsubmit=(e)=>{
 e.preventDefault()
   const option =e.target.elements.opton.value;
   if(option){
        app.options.push(option);
        e.target.elements.opton.value='';
        render()
   }else {
  alert("no vale");
   }
}
const removall=()=>(
  app.options=[],
  render()

)
const makesub=()=>{
   const random=Math.floor(Math.random()*app.options.length);
    const option=app.options[random];
     alert(option);

}

const render=()=>{
    var template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length===0} onClick={makesub}>What should i do?</button>
            <button onClick={removall}>remove all</button>
        
           
            <ol>
                
                
                {
                    app.options.map((num) => {
                        return <li key={num}>{num}</li>

                    })
                }
            </ol>
            <form onSubmit={onformsubmit}>
                <input type="text" name="opton" />
                <input type="submit" />
            </form>
        </div>
    )

    ReactDOM.render(template, document.getElementById("app"));

}
render();