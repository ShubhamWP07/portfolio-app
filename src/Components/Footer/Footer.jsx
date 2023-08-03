import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__social extra-design">
          <a
            href="https://www.instagram.com/0ye__its__shubh/"
            className="home__social-icon"
            target="_blank"
          >
            <i className="uil uil-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/shubhamsprofile/"
            className="home__social-icon"
            target="_blank"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>

          <a
            href="mailto: contactmeshubhamkr@gmail.com"
            className="home__social-icon"
            target="_blank"
          >
            <i className="uil uil-envelope-alt"></i>
          </a>

          <a
            href="https://github.com/ShubhamWP07"
            className="home__social-icon"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
        <div className="copyright">
          <p className="copyright-text">
            © 2023 Shubham Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
