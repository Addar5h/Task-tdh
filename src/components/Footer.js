import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";


const Footer = () => {
  return (
    
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-column">
        <img src="TenaliDH-Logo.png"/>
        <address className='add mt-4'>
          JK Towers, 8-2-293/82/B/S-7, 2nd Floor, Road Number 10C, Gayatri Hills, Jubilee Hills, Hyderabad, Telangana 500033
        </address>
        <p>
          <strong>Get in touch:</strong><br />
          <a href="mailto:mahadevadallindustries@gmail.com">mahadevadallindustries@gmail.com</a><br />
          +91 9666389389
        </p>
      </div>

      <div className="footer-column">
        <h4>Navigation</h4>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Our Legacy</a></li>
          <li><a href="#">CSR Initiatives</a></li>
          <li><a href="#">Shop Products</a></li>
          <li><a href="#">Awards & Recognitions</a></li>
          <li><a href="#">USA</a></li>
          <li><a href="#">Media</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4><u>Our Brochure</u></h4>
        <h5>Legal Links</h5>
        <ul>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Shipping Policy</a></li>
          <li><a href="#">Refund Policy</a></li>
          <li><a href="#">Payment Services</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Connect</h4>
        <div className="social-icons">
          <a href="#"><i className="facebook"><FaFacebook />
          </i></a>
          <a href="#"><i className="instagram"><FaSquareInstagram />
            </i></a>
          <a href="#"><i className="youtube"><FaYoutube /></i></a>
          <a href="#"><i className="twitter"><FaSquareXTwitter />
          </i></a>
          <a href="#"><i className="linkedin"><FaLinkedinIn />
          </i></a>
        </div>
        </div>
        <div className="footer-column">
          <img src="Footer-Image.png" alt="Great Place to Work Badge" />
        </div>
    </div>
    <hr />
    <div className="footer-bottom">
      <p>© 2024, Tenali Double Horse. All rights reserved.</p>
    </div>
  </footer>
  );
};

export default Footer
