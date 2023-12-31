import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import UserContext from "./utlis/UserContext";

const Grocery = lazy(()=>import("./components/Grocery") )

const About = lazy(()=> import("./components/About"))

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Prashant Kamble",
    };
    setUserName(data.name);
  }, []);


  return (
    <UserContext.Provider  value={{ loggedInUser: userName, setUserName }}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
     </UserContext.Provider>
  );
};


const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{
         path: "/",
         element: <Body />
    },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading....</h1>}><About/></Suspense>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
      }
    ],
    errorElement: <Error />
  },
 
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}/>);
