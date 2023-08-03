import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="service-card">
          <i className="uil uil-web-grid services__icon"></i>
          <h2 className="service__title">Website Design</h2>
          <p className="service__desc">
            Creative web design that stands out. Eye-catching visuals and
            intuitive user experiences.
          </p>
        </div>

        <div className="service-card">
          <i className="uil uil-web-grid services__icon"></i>
          <h2 className="service__title">Website Redesign</h2>
          <p className="service__desc">
            Website redesign services to give clients' existing websites a fresh
            and modern look.
          </p>
        </div>

        <div className="service-card">
          <i class="fa-solid fa-cart-shopping services__icon"></i>
          <h2 className="service__title">E-commerce Website</h2>
          <p className="service__desc">
            Creating e-commerce websites using WordPress, and ensuring a
            seamless shopping experience for customers.
          </p>
        </div>

        <div className="service-card">
          <i class="fa-solid fa-phone services__icon"></i>
          <h2 className="service__title">Website Maintenance</h2>
          <p className="service__desc">
            Ensuring peak website performance with reliable maintenance and
            dedicated support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
