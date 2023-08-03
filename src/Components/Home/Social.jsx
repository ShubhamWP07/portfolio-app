import React from "react";

const Social = () => {
  return (
    <div className="home__social">
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
  );
};

export default Social;
