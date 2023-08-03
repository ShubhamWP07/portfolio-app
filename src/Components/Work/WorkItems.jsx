import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a href={item.demo} target="_blank" className="work__button">
        Demo <i className="uil uil-arrow-right work__button-icon"></i>
      </a>
      <a href={item.repo} target="_blank" className="work__button">
        Repo <i className="uil uil-github-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
