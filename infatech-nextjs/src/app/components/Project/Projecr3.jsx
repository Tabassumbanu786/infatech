"use client";
import { useState } from "react";
import data from "../../Data/project3.json";

const Projecr3 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    
    <div className="container py-5">
      <div className="portfolio-hero">
  <div className="container text-center">
    <h1 className="hero-title">
      Platforms We’ve Built for Real Businesses
    </h1>
    <p className="hero-desc">
      From e-commerce to service platforms — designed to work, scale, and convert.
    </p>

    <a
      href="https://wa.me/7021710954"
      target="_blank"
      className="hero-btn"
    >
      Get a Quote
    </a>

  </div>
</div>
      {data.map((item, index) => (
        <div className="custom-card" key={index}>

          {/* TOP SECTION */}
          <h2 className="title">{item.title}</h2>

          <p className="category">{item.category}</p>

          <p className="desc">{item.description}</p>

          <div className="tags">
            {item.features?.map((f, i) => (
              <span key={i}>{f}</span>
            ))}
          </div>
          {/* TESTIMONIAL (MOVE HERE) */}
<div className="testimonial-box">
  <p className="testimonial-text">
    “{item.testimonial?.text}”
  </p>

  <div className="testimonial-user">
    <div className="avatar">
      {item.testimonial?.name
        ?.split(" ")
        .map((n) => n[0])
        .join("")}
    </div>

    <div>
      <h5>{item.testimonial?.name}</h5>
      <span>{item.testimonial?.company}</span>
    </div>
  </div>
</div>
          <div className="actions">
            <a href={item.website || "#"} target="_blank" className="btn-primary">
              VIEW WEBSITE
            </a>

            <button
              className="btn-secondary"
              onClick={() => toggle(index)}
            >
              VIEW DETAILS {activeIndex === index ? "▲" : "▼"}
            </button>
          </div>

          {/* EXPAND SECTION */}
          <div className={`expand-section ${activeIndex === index ? "show" : ""}`}>

            <h3 className="expand-title">{item.description}</h3>

            <div className="expand-block">
              <h4>The Challenge</h4>
              <p>{item.challenge}</p>
            </div>

            <div className="expand-block">
              <h4>What We Built</h4>
              <ul>
                {item.built?.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>

            <div className="expand-block">
              <h4>The Result</h4>
              <p>{item.result}</p>
            </div>

            {/* TESTIMONIAL */}
            {/* <div className="testimonial-box">
              <p className="testimonial-text">
                “{item.testimonial?.text}”
              </p>

              <div className="testimonial-user">
                <div className="avatar">
                  {item.testimonial?.name
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <h5>{item.testimonial?.name}</h5>
                  <span>{item.testimonial?.company}</span>
                </div>
              </div>
            </div> */}

          </div>

        </div>
      ))}
    </div>
  );
};

export default Projecr3;