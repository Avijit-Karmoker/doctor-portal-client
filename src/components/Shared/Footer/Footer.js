import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import FooterCol from "../FooterCol/FooterCol";
import {
  faFacebookF,
  faInstagram,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";
import './Footer.css';

const Footer = () => {
  const noNamed = [
    { name: "Emergency Dental Care", link: "/emergency" },
    { name: "Check Up", link: "/checkup" },
    { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
    { name: "Tooth Extraction", link: "/tooth-extract" },
    { name: "Check Up", link: "/checkup" },
  ];
  const ourAddress = [
    { name: "New York - 101010 Hudson", link: "//google.com/map" },
    { name: "Yards", link: "//google.com/map" },
  ];
  const oralHealth = [
    { name: "Emergency Dental Care", link: "/emergency" },
    { name: "Check Up", link: "/checkup" },
    { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
    { name: "Tooth Extraction", link: "/tooth-extract" },
    { name: "Check Up", link: "/checkup" },
    { name: "Check Up", link: "/checkup" },
    { name: "Check Up", link: "/checkup" },
  ];
  const services = [
    { name: "Emergency Dental Care", link: "/emergency" },
    { name: "Check Up", link: "/checkup" },
    { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
    { name: "Tooth Extraction", link: "/tooth-extract" },
    { name: "Check Up", link: "/checkup" },
    { name: "Check Up", link: "/checkup" },
    { name: "Check Up", link: "/checkup" },
  ];
  return (
    <footer className="footer-area clear-both">
      <div className="pt-5">
        <div className="row py-5 me-5 ms-5">
          <FooterCol key={1} menuTitles={"."} menuItems={noNamed} />
          <FooterCol key={2} menuTitles="Services" menuItems={services} />
          <FooterCol key={3} menuTitles="Oral Health" menuItems={oralHealth} />
          <FooterCol key={4} menuTitles="Our Address" menuItems={ourAddress}>
            <ul className="social-media">
              <li className="list-inline-items">
                <a href="//facebook.com/">
                  <FontAwesomeIcon
                    className="icon active-icon"
                    icon={faFacebookF}
                  />
                </a>
              </li>
              <li className="list-inline-items">
                <a href="//google.com/">
                  <FontAwesomeIcon
                    className="icon active-icon"
                    icon={faGooglePlus}
                  />
                </a>
              </li>
              <li className="list-inline-items">
                <a href="//instagram">
                  <FontAwesomeIcon
                    className="icon active-icon"
                    icon={faInstagram}
                  />
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <h6>Call Now</h6>
              <button className="btn btn-brand">+0192301930</button>
            </div>
          </FooterCol>
        </div>
        <div className="copyRight text-center">
            <p>Copyright&copy; {(new Date()).getFullYear()} All rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
