import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../App";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { FaUsers } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogIn } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";

import Footer from "../component/Footer";
import { useContext } from "react";

function MainNavigation({ children }) {
  const { isLoggedin, isAdmin } = useContext(CurrentUserContext);

  function openSidebar() {
    document.getElementById("mySidebar").style.width = "10rem";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0";
    document.body.style.backgroundColor = "white";
  }

  return (
    <>
      <header>
        <span id="logo">
          <NavLink to={"/"}>
            <img
              src="https://aptech.fpt.edu.vn/wp-content/uploads/2023/03/Logo-fpt-aptech.png"
              alt="T2404E Class"
            />
          </NavLink>
        </span>

        <span id="nav-bar">
          <ul>
            <li className="nav-link">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to={"/students"}>Students</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            {!isLoggedin && (
              <li className="nav-link">
                <NavLink to={"/login"}>
                  <span>Login</span>
                </NavLink>
              </li>
            )}
            {isLoggedin && (
              <li className="nav-link">
                <NavLink to={"/logout"}>
                  <span>Logout</span>
                </NavLink>
              </li>
            )}

            {isLoggedin && isAdmin && (
              <li className="username">
                Hello <strong>Admin</strong>
              </li>
            )}
            {isLoggedin && !isAdmin && (
              <li className="username">
                Hello <strong>Student</strong>
              </li>
            )}
          </ul>
        </span>
        <li className="menu-icon" onClick={openSidebar}>
          <TiThMenu />
        </li>
      </header>

      <span>
        <ul id="mySidebar">
          <li className="close-btn" onClick={closeSidebar}>
            <IoClose />
          </li>

          <li onClick={closeSidebar}>
            <NavLink to={"/"}>
              <GoHomeFill /> Home
            </NavLink>
          </li>
          <li onClick={closeSidebar}>
            <NavLink to={"/students"}>
              <FaUsers /> Students
            </NavLink>
          </li>
          <li onClick={closeSidebar}>
            <NavLink to={"/contact"}>
              <MdEmail /> Contact
            </NavLink>
          </li>
          {!isLoggedin && (
            <li onClick={closeSidebar}>
              <NavLink to={"/login"}>
                <span>
                  {" "}
                  <IoLogIn />
                  Login
                </span>
              </NavLink>
            </li>
          )}
          {isLoggedin && (
            <li onClick={closeSidebar}>
              <NavLink to={"/logout"}>
                <span>
                  <IoLogOut /> Logout
                </span>
              </NavLink>
            </li>
          )}
        </ul>
      </span>

      {children}

      <Footer />
    </>
  );
}

export default MainNavigation;
// export default Layout1;
