import React from "react";
import { IoMdSearch } from "react-icons/io";
import { BsCart4 } from "react-icons/bs";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container collapse navbar-collapse" id="navbarSupportedContent">
            
          <a className="navbar-brand" href="#">
            <img src="TenaliDH-Logo.png" alt="logo" width={150} height={50} />
          </a>
          <ul className="navbar-nav mb-lg-0 mynavbar">
            <li className="nav-item dropdown">
                    <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >
                    ABOUT US
                    </a>
                    <ul className="dropdown-menu">
                    <li>
                        <a className="dropdown-item" href="#">
                        WHO WE ARE
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                        OUR NETWORK
                        </a>
                    </li>
                    <li>
                    <a className="dropdown-item" href="#">
                        AWARDS AND RECOGNITION
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                        CSR INITIATIVES
                        </a>
                    </li>
                    </ul>
            </li>
            <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SHOP PRODUCTS
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      DALLS
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      SUNNUNDALU
                    </a>
                  </li>
                  <li>
                  <a className="dropdown-item" href="#">
                      MILLETSLADDU
                    </a>
                  </li>
                  <li>
                  <a className="dropdown-item" href="#">
                      CHUTNEY POWDER
                    </a>
                  </li>
                  <li>
                  <a className="dropdown-item" href="#">
                   PICKLES
                   </a>
                   </li>
                   <li>
                  <a className="dropdown-item" href="#">
                      OTHERS
                    </a>
                  </li>
                  <li>
                  <a className="dropdown-item" href="#">
                      SPICE POWDER
                    </a>
                  </li>
                  <li>
                  <a className="dropdown-item" href="#">
                      INSTANT BREAKFAST MIX
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"> 
                  SPECIAL OFFERS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"> 
                  OUR LEGACY
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"> 
                  MEDIA
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"> 
                  NEWSROOM
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false" 
                >
                  EVENTS
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      IPL 2024
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      MOTHERS DAY
                    </a>
                  </li>
                  <li>
                    
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"> 
                  CONTACT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"> 
                  OUR RECEPIES
                </a>
              </li>
              <li className="nav-item">
                <IoMdSearch size={28} />
              </li>
              <li className="nav-item">
                <BsCart4 size={28} />
              </li>
          </ul>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
          </div>
      </nav>
    );
  }
}

export default Navbar;
