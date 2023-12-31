import { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);

    // console.log(this.props.name + "child Constructor");

    this.state = {
      // UseState in class based component
    };

    // this.setState({                                          // updating UseState in class based component
    //     count: this.state.count + 1,
    //   });

    this.state = {
      userInfo: {
        login: "Dummy",
        public_repos: "Default",
      },
    };
  }

  // componentDidMount(){
  //     console.log(this.props.name + "child component did mount")
  // }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Prashant-kamble10");
    const json = await data.json();
    console.log("class component json: ", json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate(){
    console.log("component did update")
  }

  componentWillUnmount(){
    console.log("component Will Unmount")
  }

  render() {
    // console.log(this.props.name + "child render");
    // const { name, location } = this.props;
    const { login, public_repos } = this.state.userInfo;
//    debugger;
    return (
      <>
        <div className=" m-4 p-4 bg-gray-200 rounded-lg text-xl">
          {/* <h1>Name : {name}child </h1> */}

          <h1>Name : {login} </h1>
          <h1>public_repos : {public_repos}</h1>
          <h1>Contact: @Prashant-kamble10</h1>
        </div>
      </>
    );
  }
}

export default User;

// when 1 parent class component has 2 or 3 child class component [see the rendering "chronology"]
// this happen bcoz of "React Lifecycle Method" refer to diagram

// parent constructor
// parent render

// ----Render Phase-----
//first child constructor
//first child render
//second child constructor
//second child render
//Third child constructor
//Third child render

// ----Commit Phase----- [DOM gets update]
//first child component did mount
//second child component did mount
//Third child component did mount

// parent component did mount

// /*
//  *
//  * --- MOUNTING ----
//  *
//  * Constructor (dummy)
//  * Render (dummy)
//  *      <HTML Dummy >
//  * Component Did MOunt
//  *      <API Call>
//  *      <this.setState> -> State variable is updated
//  *
//  * ---- UPDATE
//  *
//  *      render(APi data)
//  *      <HTML (new API data>)
//  *      componentDid Update
//  *
