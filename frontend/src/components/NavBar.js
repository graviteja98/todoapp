import React from "react";
import { Link, useNavigate } from "react-router-dom";
import chkAuthHelper from "./Helpers/chkAuthHelper";

function NavBar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.setItem("isLogged", false);
    navigate("/login");
  };
  return (
    <div className="container p-4  d-flex justify-content-around bg-warning">
      <Link to="/" className="text-decoration-none text-white">
        Home
      </Link>
      {!chkAuthHelper() ? (
        <>
          {" "}
          <Link to="/login" className="text-decoration-none text-white ">
            Login
          </Link>
          <Link to="/signup" className="text-decoration-none text-white">
            Signup
          </Link>
        </>
      ) : (
        <Link to="/logout" className="text-decoration-none text-white" onClick={logout}>
          Logout
        </Link>
      )}
    </div>
  );
}

export default NavBar;
