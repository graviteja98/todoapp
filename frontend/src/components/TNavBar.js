
import { Link, useNavigate } from "react-router-dom";
import chkAuthHelper from "./Helpers/chkAuthHelper";
function TNavBar(props) {
  console.log("hello from navbar");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.setItem("isLogged", false);
    navigate("/login");
  };
  return (
    <>
      <div className="container p-4  d-flex justify-content-around bg-warning">
        <Link to="/" className="text-decoration-none">
         <h3> <b>Home</b></h3>
        </Link>
        {!chkAuthHelper() ? (
          <>
            {" "}
            <Link to="/login" className="text-decoration-none ">
             <h3><b>Login</b></h3> 
            </Link>
            <Link to="/signup" className="text-decoration-none">
           <h3>  <b> Signup</b></h3>
            </Link>
          </>
        ) : (
          <Link to="/logout" className="text-decoration-none" onClick={logout}>
         <h3>  <b> Logout </b></h3>
          </Link>
        )}
      </div>
      {props.children}
    </>
  );
}

export default TNavBar;
