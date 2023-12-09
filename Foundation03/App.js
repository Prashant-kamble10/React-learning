import React from "react";
import ReactDOM from "react-dom/client";


//1 React.createElement => creates a object, & render() method => convert object into html tag/element  

//2 const heading = React.createElement("h1", {id: "heading"}, "Namaste React")
//3 console.log('heading: ', heading);

// JSX => HTML like syntax
const heading = <h1 id="heading">Namaste React using JSX</h1>     // JSX in one line ok but if you use JSX in multiple line wrap in ( ) 

// const jsxHeading = (<h1 id="heading">
//   Namaste React using JSX
//   </h1>  )                                                      // JSX in one line ok but if you use JSX in multiple line wrap in ( ) 

console.log('heading: ', heading);
// --------------------------------------------------------------------------------------------------------------------------------------------

// const fn =()=> {true}            // one line ok 
// const fn1 =()=> true             // one line ok 
// const fn2 =()=> {                // multiple line wrap in { }
//   return true
// }

// fn == fn1 == fn2


// const HeadingComponent2 = () =>{
//   return <h1 className="heading">Namaste from functional component</h1>
// }

// const HeadingComponent = () =>( 
//    <h1 className="heading">Namaste from functional component</h1>
// )

// HeadingComponent == HeadingComponent2

const Tittle =()=>(
  <h1>Hi I'm coming from Tittle </h1>
)


const HeadingComponent = () =>( 
  <div id="container">
    <Tittle/>
      <h1 className="heading">Namaste from functional component</h1>
  </div>
)

const root =  ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading)
root.render(<HeadingComponent/>)