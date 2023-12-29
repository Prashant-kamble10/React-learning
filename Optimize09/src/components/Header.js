import { LOGO_URL } from "../utlis/constants.js";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [authenticateBtn, setAuthenticateBtn] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button
            className="authenticate-btn"
            onClick={() => {
              authenticateBtn === "Login"
                ? setAuthenticateBtn("Logout")
                : setAuthenticateBtn("Login")
            }}
          >
            {authenticateBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
