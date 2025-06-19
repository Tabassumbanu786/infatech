'use client';
import Image from "next/image";
import data from '../../Data/teamdetails.json';

const TeamDetail = ({ slug }) => {
  const member = data.find((item) => item.slug === slug);

  if (!member) return <p>Team member not found.</p>;

  return (
    <div className="team-details-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="team-thumb">
              <Image src={member.img} alt={member.name} width={636} height={758} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="team-details-right">
              <div className="team-details-content">
                <div className="team-member-title">
                  <h4>{member.name}</h4>
                  <p>{member.designation}</p>
                </div>
                <p className="desc">{member.description}</p>
              </div>
              <div className="row add-bg">
                            <div className="col-lg-6 col-md-6">
                                <div className="contact-info-box">
                                    <div className="contact-info-icon">
                                    <i className="bi bi-telephone"></i>
                                    </div>
                                    <div className="contact-info-content">
                                        <h4>Call us Any time</h4>
                                        <p>+91 7021710954</p>
                                    </div>
                                </div>
                            </div>					
                            <div className="col-lg-6 col-md-6">
                                <div className="contact-info-box">
                                    <div className="contact-info-icon">
                                    <i className="bi bi-envelope"></i>
                                    </div>
                                    <div className="contact-info-content">
                                        <h4>Send E-Mail</h4>
                                        <p>info@infatech.in</p>
                                    </div>
                                </div>
                            </div>
                </div>
              {/* <div className="team-details-social-icon">
                <ul>
                  <li>Social Media</li>
                  <li><a href={member.social.facebook}><i className="bi bi-facebook"></i></a></li>
                  <li><a href={member.social.twitter}><i className="bi bi-twitter"></i></a></li>
                  <li><a href={member.social.linkedin}><i className="bi bi-linkedin"></i></a></li>
                </ul>
              </div> */}

              <div className="team-details-location-box">
                <div className="contact-info-icon">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="contact-info-content">
                  <h4>Location</h4>
                  <p>Office No. 205, Pearl Platinum Commercial Building, Chandiwala Complex, Near Ajit Glass Signal, Off SV Road, Jogeshwari West, Mumbai - 400 102, Maharashtra, India.</p> {/* Optional: make dynamic */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Optionally show contact form and skills — static or conditionally rendered */}
      </div>
    </div>
  );
};

export default TeamDetail;
