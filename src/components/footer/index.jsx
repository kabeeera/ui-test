import React from "react";
import "./footer.scss";

const Footer = () => {
  const footerItems = [
    ["Contact Us", "Terms of use", "Cookies Policy", "Help & Support"],
    ["Facebook", "Linkedin", "Instagram", "Youtube"],
  ];

  return (
    <div className="footer-wrapper">
      {footerItems.map((list, index) => (
        <ul key={index}>
          {list.map((item, itemIndex) => (
            <li key={itemIndex}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      ))}
      <div className="footer-bottom">
        <p>Halal Networks © 2023. All rights reserved</p>
        <ul>
          <li>
            <a href="#">User Agreement</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
