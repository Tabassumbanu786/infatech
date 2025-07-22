import React from "react";
import Image from "next/image";

const ContactSection = ({ ifaData }) => {
  return (
    <section id="contact" className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center g-4">
          
          {/* Illustration Left */}
          <div className="col-md-6 text-center text-md-start">
            <Image
              src="/assets/financial-advisors/contact-illustration.png"
              alt="Contact Illustration"
              width={500}
              height={500}
              className="img-fluid mx-auto mx-md-0"
            />
          </div>

          {/* Text Right */}
          <div className="col-md-6">
            <h2 className="h3 fw-bold mb-3">Let’s Connect</h2>
            <p className="text-muted mb-4">
              I’d love to help you get started on your investment journey. Reach out anytime — I’m just a message away.
            </p>

            <div className="fs-5 mb-4">
              <p>📞 <strong>Phone:</strong> {ifaData.phone}</p>
              <p>📧 <strong>Email:</strong> {ifaData.email}</p>
              {ifaData.location && (
                <p>📍 <strong>Location:</strong> {ifaData.location}</p>
              )}
            </div>

            {/* WhatsApp Button */}
            <div className="mt-4">
              <a
                href={`https://wa.me/${(ifaData.phone || '').replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success px-4 py-3"
              >
                💬 Chat with me instantly on WhatsApp!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
