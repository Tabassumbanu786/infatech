"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ServiceDetail = ({ service }) => {
  const Services = [
    "Database Security",
    "IT Solution",
    "Technology Consult",
    "App Development",
    "UI/UX Design",
    "Cyber Security",
  ];

  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  const handleItemClick = (index) => {
    if (index === openItemIndex) {
      setOpenItemIndex(-1);
    } else {
      setOpenItemIndex(index);
    }
  };

  useEffect(() => {
    if (firstItemOpen) {
      setOpenItemIndex(0);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen]);

  return (
    <div className="services-details-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-12">
                <div className="services-details-thumb">
                  <Image
                    src={service?.image}
                    alt="img"
                    width={856}
                    height={504}
                  />
                </div>
                <div className="services-details-content">
                  <h4 className="services-details-title">{service?.title}</h4>
                  {service?.content?.split("\n\n").map((para, idx) => (
                    <p key={idx} className="services-details-desc">
                      {para}
                    </p>
                  ))}
                </div>

                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="service-detalis-text-box">
                      <div className="service-details-content">
                        <h4>Why Choose Us</h4>
                        <p>
                        At Infatech, we don’t just deliver software—we engineer long-term success.
                        Our team combines deep technical expertise with a 
                        problem-solving mindset to help you grow faster and smarter.
                        </p>
                      </div>
                      <div className="service-details-list">
                        <ul>
                          <li>
                            <i className="bi bi-arrow-right"></i>Success Stories
                          </li>
                          <li>
                            <i className="bi bi-arrow-right"></i>Custom Tech Services
                          </li>
                          <li>
                            <i className="bi bi-arrow-right"></i>Client-Driven Innovations
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="service-details-icon-box">
                      <div className="service-det-icon">
                        <Image
                          src="/assets/images/inner/det-icon.png"
                          alt="img"
                          width={56}
                          height={60}
                        />
                      </div>
                      <div className="service-det-content">
                        <h3>Empowering Your Success</h3>
                        <p>
                        We partner with businesses to streamline operations, boost productivity, 
                        and unlock digital growth. With a focus on innovation, ethical tech practices, 
                        and result-oriented strategies, 
                        Infatech empowers you to turn bold ideas into working solutions that scale.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="col-lg-12 col-md-12">
                  <div className="tab_container">
                    <div className="feq-content">
                      <h3 className="faq-title">Frequently Asked Questions?</h3>
                      <p className="faq-description">
                        Get clarity on our process and what you can expect.
                      </p>
                    </div>
                    <div id="tab" className="tab_content">
                      {service?.faqs?.length > 0 && (
                        <ul className="accordion">
                          {service.faqs.map((item, index) => (
                            <li
                              key={index}
                              className={`cs_accordian ${
                                index === openItemIndex ? "active" : ""
                              }`}
                            >
                              <a onClick={() => handleItemClick(index)}>
                                <span>{item.question}</span>
                              </a>
                              <p ref={accordionContentRef}>{item.answer}</p>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
                {/* End FAQ */}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-12">
                <div className="widget-sidber">
                  <div className="widget-sidber-content">
                    <h4>Main Services</h4>
                  </div>
                  <div className="widget-category">
                    <ul>
                      {Services.map((item, i) => (
                        <li key={i}>
                          <Link href="/service/service-details">
                            <Image
                              src="/assets/images/inner/category-icon.png"
                              alt="img"
                              width={19}
                              height={14}
                            />
                            {item}
                            <i className="bi bi-arrow-right"></i>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="widget-sidber">
                  <div className="widget-sidber-content">
                    <h4>Downloads</h4>
                  </div>
                  <div className="widget-sidber-download-button">
                    <a href="#">
                      <i className="bi bi-file-earmark-pdf"></i>Service Report
                      <span>
                        <i className="bi bi-download"></i>
                      </span>
                    </a>
                    <a className="active" href="#">
                      <i className="bi bi-file-earmark-pdf"></i>Download Lists
                      <span>
                        <i className="bi bi-download"></i>
                      </span>
                    </a>
                  </div>
                </div>

                <div className="widget-sidber-contact-box">
                  <p className="widget-sidber-contact-text">Call Us Anytime</p>
                  <h3 className="widget-sidber-contact-number">
                    +91 7021710954
                  </h3>
                  <span className="widget-sidber-contact-gmail">
                    <i className="bi bi-envelope-fill"></i>tabassumbanumusa@gmail.com
                  </span>
                  <div className="widget-sidber-contact-btn">
                    <Link href="/contact">
                      Contact Us <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Sidebar */}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
