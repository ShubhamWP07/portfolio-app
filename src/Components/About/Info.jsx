import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="fa-solid fa-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1 + Working Years</span>
      </div>

      <div className="about__box">
        <i className="fa-solid fa-briefcase about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">52 + Projects</span>
      </div>

      <div className="about__box">
        <i className="fa-solid fa-phone about__icon"></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
