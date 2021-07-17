import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="footer-social-icons-container">
      <FaGoogle className="footer-icons" />
      <FaTwitter className="footer-icons" />
      <FaInstagram className="footer-icons" />
      <FaYoutube className="footer-icons" />
    </div>
    <h1 className="footer-heading">Contact Us</h1>
  </div>
)

export default Footer
