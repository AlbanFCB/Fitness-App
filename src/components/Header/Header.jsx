import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="header">
      <img src={Logo} alt="" className="logo" />

        <ul className="header-menu">
          <li>
            <Link
              to="header"             
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="programs"
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="reasons"
              smooth={true}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              to="plans"
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>

       <div className="nav-small-screen">
        <div>
          <button
          className="icon-menu"
          onClick={toggleMenu}
          >
            {isOpen ? <CloseIcon/> : <MenuIcon/>}
          </button>
        </div>
       

        {isOpen && (
          <div className="smallscreen-overlay">
            <ul className="smallscreen-links">
          <li>
            <Link
              to="header"
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="programs"
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="reasons"
              smooth={true}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              to="plans"
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
          </div>
        )}
       </div>
      
    </nav>
  );
};

export default Header;
