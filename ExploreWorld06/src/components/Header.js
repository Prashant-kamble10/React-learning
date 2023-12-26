import { LOGO_URL } from "../utlis/constants.js";
import { useState } from "react";

const Header = () => {
  const [authenticateBtn, setAuthenticateBtn] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
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
