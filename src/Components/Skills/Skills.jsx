import React from "react";
import "./Skills.css";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import tailwind from "../../assets/tailwind.png";
import react from "../../assets/react.png";
import git from "../../assets/git.png";
import wordpress from "../../assets/wordpress.png";
import elem from "../../assets/elem.png";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills__container container">
        <img src={html} alt="" className="skills-img" />
        <img src={css} alt="" className="skills-img" />
        <img src={js} alt="" className="skills-img" />
        <img src={react} alt="" className="skills-img" />
        <img src={tailwind} alt="" className="skills-img" />
        <img src={git} alt="" className="skills-img" />
        <img src={wordpress} alt="" className="skills-img" />
        <img src={elem} alt="" className="skills-img" />
      </div>
    </section>
  );
};

export default Skills;
