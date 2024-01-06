import { LOGO_URL } from "../utlis/constants.js";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utlis/useOnlineStatus.js";
import UserContext from "../utlis/UserContext.js";

const Header = () => {
  const [authenticateBtn, setAuthenticateBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-8">
      <div className="logo-container">
        <img className="w-28 p-2.5" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4" >
          <li className="px-2 text-2xl" >Online status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-2 text-2xl hover:bg-pink-200 rounded-lg" ><Link to="/">Home</Link></li>
          <li className="px-2 text-2xl  hover:bg-pink-200 rounded-lg"><Link to="/about">About</Link></li>
          <li className="px-2 text-2xl  hover:bg-pink-200 rounded-lg"><Link to="/contact">Contact Us</Link></li>
          <li className="px-2 text-2xl  hover:bg-pink-200 rounded-lg"><Link to="/grocery">Grocery</Link> </li>
          <li className="px-2 text-2xl  hover:bg-pink-200 rounded-lg">Cart</li>
          <button
            className="authenticate-btn px-2 text-2xl font-semibold  hover:bg-pink-200 rounded-lg"
            onClick={() => {
              authenticateBtn === "Login"
                ? setAuthenticateBtn("Logout")
                : setAuthenticateBtn("Login")
            }}
          >
            {authenticateBtn}
          </button>
          <li className="px-4 font-extrabold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
