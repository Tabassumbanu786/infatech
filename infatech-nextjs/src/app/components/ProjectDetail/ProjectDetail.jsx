import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "../../Data/portfolio";

const ProjectDetail = ({ slug }) => {

  const project = portfolioData.find((item) => item.slug === slug);

  if (!project) return <p>Project not found</p>;

  const InfoBox = [
    { title: 'Date', info: project.date },
    { title: 'Client', info: project.client },
    { title: 'Website', info: project.website },
    { title: 'Location', info: project.location },
  ];

  const Services = project.services;

  return (
    <div className="project-details-area">
      <div className="container">

        {/* IMAGE */}
        {/* <div className="row">
          <div className="project-details">
            <div className="project-details-thumb">
              <Image 
                src={project.img} 
                alt={project.title} 
                width={1296} 
                height={673} 
              />
            </div>
          </div>
        </div> */}

        {/* INFO BOX */}
        <div className="row project-box-info">
          {InfoBox.map((item, i) => (  
            <div key={i} className="col-lg-3 col-md-3">
              <div className="project-details-box">
                <p>{item.title}</p>
                <h6>{item.info}</h6>
              </div>
            </div>
          ))}
        </div>

        <div className="row">

          {/* LEFT CONTENT */}
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-12">

                <div className="project-details-content">

                  {/* TITLE */}
                  <h4 className="project-details-title">
                    {project.title}
                  </h4>

                  {/* DESCRIPTION */}
                  <p className="project-details-desc">
                    {project.description}
                  </p>

                  {/* CHALLENGE */}
                  <div className="project-det-title">
                    <h3>The Challenge</h3>
                  </div>
                  <p className="project-det-desc">
                    {project.challenge}
                  </p>

                  <div className="project-det-title">
  <h3>What We Built</h3>
</div>

<ul className="project-built-list">
  {project.built?.map((item, i) => (
    <li key={i}>
      <i className="bi bi-check-circle-fill"></i> {item}
    </li>
  ))}
</ul>

                  {/* RESULT */}
                  <div className="project-det-title">
                    <h3>The Result</h3>
                  </div>
                  <p className="project-det-desc">
                    {project.result}
                  </p>
                  <div className="project-det-title">
  <h3>Client Feedback</h3>
</div>

<div className="project-testimonial">
  <div className="testimonial-box">
    <p className="testimonial-text">
      {project.testimonial?.text}
    </p>

    <h5>{project.testimonial?.name}</h5>
    <span>{project.testimonial?.company}</span>

  </div>
</div>
                </div>

                <div className="row align-items-center">

                  {/* SIDE IMAGE */}
                  <div className="col-lg-6">
                    <div className="project-details-item-images">
                      <Image 
                        src={project.img} 
                        alt="img" 
                        width={416} 
                        height={284} 
                      />
                    </div>
                  </div>

                  {/* SERVICES */}
                  <div className="col-lg-6">
                    <div className="project-details-list-item">
                      <h4>Services Included</h4>
                      <ul>
                        {Services.map((item, i) => (
                          <li key={i}>
                            <i className="bi bi-check-circle-fill"></i>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* OPTIONAL TEXT */}
                  <a className="project-details-text" href={project.website} target="_blank">
                    Visit Website
                  </a>

                </div>

              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-12">

                {/* SERVICES BOX */}
                <div className="widget-sidber">
                  <div className="widget-sidber-content">
                    <h4>Main Services</h4>
                  </div>

                  <div className="widget-category">
                    <ul>
                      {Services.map((item, i) => ( 
                        <li key={i}>
                          <Link href="#">
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

                {/* CONTACT BOX */}
                <div className="widget-sidber-contact-box">
                  <p className="widget-sidber-contact-text">Call Us Anytime</p>
                  <h3 className="widget-sidber-contact-number">
                  +91 7021710954
                  </h3>
                  <span className="widget-sidber-contact-gmail">
                    tabassum@infatech.in
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

        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;