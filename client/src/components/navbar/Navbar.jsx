import "./navbar.css";
import {faBed,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const loginRedirect = () => {
  window.location.href='/login'
}
const Navbar = () => 
{
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="headerList">
          <div className="headerListItem active ">
            <FontAwesomeIcon icon={faBed}/>
            <span>Hotel Booking</span>
          </div>
        </div>
        {user ? user.username : (
          <div className="navItems">
            <button className="navButton" onClick={loginRedirect}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

