'use client';
import React from 'react';
import { Users, Award, Target } from 'lucide-react';
import SectionTitle from "../Common/SectionTitle";


const AboutUs = () => {
  const teamMembers = [
    {
      img: "/assets/images/inner/tabassum.png",
      title: "Tabassum Sheliya — Founder",
      slug: "tabassum",
      desc: "Technical Product Manager with 15+ years' experience delivering scalable, user-centric digital solutions."
    },
    {
      img: "/assets/images/inner/mehdi.png",
      title: "Mehdi Musa — Co-Founder",
      slug: "mehdi",
      desc: "Co-Founder & Full Stack Developer with 5+ years' experience building fast, user-focused apps and leading Infatech's tech team."
    },
    {
      img: "/assets/images/inner/anu.png",
      title: "Dr. Anu Khanchandani — Mentor",
      slug: "anu",
      desc: "Mentor with 25+ years' experience in product strategy and business growth, guiding Infatech toward long-term, strategic success."
    }
  ];

  return (
    <section id="about" className="py-5 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="row">
                <div className="col-lg-12">
                    <div className="section-title text-center">
                    <SectionTitle
                            SubTitle="OUR TEAM MEMBERS"
                            Title="Meet Our Core Team"
                        ></SectionTitle>
                    </div>
                </div>
            </div>
        {/* Team Members */}
        <div className="row g-4 mb-5">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="bg-light rounded-3 p-4 text-center h-100 shadow-sm hover-shadow">
                <div className="mb-4">
                  <img
                    src={member.img}
                    alt={member.title}
                    className="rounded-circle border border-3 border-white shadow"
                    style={{ width: '96px', height: '96px', objectFit: 'cover'}}
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop';
                    }}
                  />
                </div>
                <h5 className="fw-bold text-dark mb-2">{member.title}</h5>
                <p className="text-dark">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
