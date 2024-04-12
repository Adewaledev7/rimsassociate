import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation, useNavigate } from "react-router-dom";
import { data } from "../data/NavbarData";
import { FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import "./Navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);

  let navigate = useNavigate();
  let location = useLocation();

  const handleClick = () => {
    setShow(!show);
  };

  const closeMobileMenu = (to, id) => {
    if (id && location.pathname === "/") {
      navigate(id);
    }

    navigate(to);
    setShow(false);
  };

  return (
    <div>
      <header>
        <a className="logo" href="/">
          <img src="./assets/Screenshot_20230919_124718_WhatsApp.jpg" />
        </a>
        <div className="tab" onClick={handleClick}>
          {show ? <FaTimes /> : <CgMenuRight />}
        </div>
        <nav>
          {data.map((el, index) => (
            <ul key={index} className={show ? "open" : ""}>
              <li>
                <Link
                  smooth
                  to={el.id}
                  className="link"
                  onClick={() => closeMobileMenu(el.to, el.id)}
                >
                  {el.text}
                </Link>
              </li>
            </ul>
          ))}
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
