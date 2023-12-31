// import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component{
    constructor(props){
        super(props)

        console.log("parent constructor")
    }

    componentDidMount(){                           // componentDidMount() use make API calls in class component
        console.log("parent component did mount")
    }

 


    render(){
        console.log("parent render")
        return(
            <>
           <div className="m-4 p-4 text-2xl">
           <h1>About us</h1>
             <h2>This is Swiggy's Clone </h2>
           </div>
    
             {/* <User name={"Prashant Kamble function"} location={"Navi Mumbai function"}/> */}
             <UserClass name={"Prashant Kamble class"}  location={"Navi Mumbai class"}/>
             {/* <UserClass name={"first"}  location={"Navi Mumbai class"}/>
             {/* <UserClass name={"second"}  location={"Navi Mumbai class"}/>
             <UserClass name={"Third"}  location={"Navi Mumbai class"}/> */} 
            </>
        )
    }
}



// const About = () =>{
//     return(
//         <>
//          <h1>About us</h1>
//          <h2>This is Swiggy's Clone </h2>

//          {/* <User name={"Prashant Kamble function"} location={"Navi Mumbai function"}/> */}
//          <UserClass name={"Prashant Kamble class"}  location={"Navi Mumbai class"}/>
//         </>
//     )
// }


export default About;




