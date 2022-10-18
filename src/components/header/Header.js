import React, { useState, useEffect } from "react";
import "./Header.scss";
import * as Icons from "react-icons/fa";
import { FaMoon, FaSun } from "react-icons/fa";
import { BsFillMoonFill } from "react-icons/bs";
import { ImSun } from "react-icons/im";

const Header = ({ myTheme, onToggleTheme, onSwitch }) => {

  const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 786) {
      setMobile(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 786) {
        setMobile(true);
      } else {
        setMobile(false);
        setSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header data-theme={myTheme}>
      <nav className="navbar">
      <a href="/" className="navbar-logo" onClick={() => setSidebar(false)}>
          Logo
        </a>
        {!mobile && (
          <ul className="nav-items">          
            <li  className="nav-item">
              <a href="#">Home</a>
            </li>     
            <li  className="nav-item">
              <a href="#">Products</a>
            </li>     
                
          </ul>
        )}
         <button className="--btn --btn-danger">Sign Up</button>

        {!mobile && (
        <div className="toggle-btn" onClick={onToggleTheme}>
            {myTheme === "dark" ? (
              <ImSun color="yellow" size={16} />
            ) : (
              <BsFillMoonFill className="dark" size={16} />
            )}
       </div>
      

        )}

        {mobile && (
          <div className="sidebar-toggle">
            {sidebar ? (
              <Icons.FaTimes
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            ) : (
              <Icons.FaBars
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            )}
          </div>
        )}
        
      </nav>

      <div className={ sidebar ? "sidebar active" : "sidebar"}>
      <ul className="sidebar-items">          
            <li  className="sidebar-item">
              <a href="#">Home</a>
            </li>     
            <li  className="sidebar-item">
              <a href="#">Products</a>
            </li>     
          </ul>
          <div className="toggle-btn" onClick={onToggleTheme}>
            {myTheme === "dark" ? (
              <ImSun color="yellow" size={18} />
            ) : (
              <BsFillMoonFill className="dark" size={18} />
            )}
       </div>
       </div>
     
    </header>
  );
};

export default Header;
