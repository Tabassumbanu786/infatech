import React from "react";
import Image from "next/image";

const ContactSection = ({ ifaData }) => {
  return (
    <section id="contact" className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10">
        
        {/* Illustration Left */}
        <div className="text-center md:text-left">
          <Image
            src="/assets/financial-advisors/contact-illustration.png"
            alt="Contact Illustration"
            width={500}
            height={500}
            className="mx-auto md:mx-0"
          />
        </div>

        {/* Text Right */}
        <div>
        <h2 className="text-3xl font-bold mb-4">Let&rsquo;s Connect</h2>
        <p className="text-gray-600 mb-6">
          I&rsquo;d love to help you get started on your investment journey. Reach out anytime — I&rsquo;m just a message away.
        </p>


          <div className="text-lg space-y-3">
            <p>📞 <strong>Phone:</strong> {ifaData.phone}</p>
            <p>📧 <strong>Email:</strong> {ifaData.email}</p>
            {ifaData.location && (
              <p>📍 <strong>Location:</strong> {ifaData.location}</p>
            )}
          </div>

          {/* WhatsApp Button */}
          <div className="mt-6">
            <a
              href={`https://wa.me/${(ifaData.phone || '').replace(/\D/g, '')}`
}
              // `https://wa.me/${(ifaData.phone || '').replace(/\D/g, '')}`

              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
            >
              💬 Chat with me instantly on WhatsApp!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
