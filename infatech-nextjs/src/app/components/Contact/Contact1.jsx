// 'use client';

// export default function ContactPage() {
//   return (
//     <div className="container py-5">
//       <div className="row justify-content-center">
//         <div className="col-lg-12">
//           <div className="row g-2 align-items-stretch">

//             {/* Contact Info Card */}
//             <div className="col-md-6">
//               <div className="p-4 h-100 border rounded-4 shadow-sm bg-white">
//                 <h2 className="mb-3 fw-bold">Get in Touch</h2>
//                 <p className="text-muted mb-4">
//                   Have questions? Reach out to us directly using the contact form or the details below.
//                 </p>
//                 <ul className="list-unstyled lh-lg">
//                   <li>
//                     <strong>📍 Address:</strong><br />
//                     Office No. 205, Pearl Platinum Commercial Building,<br />
//                     Chandiwala Complex, Near Ajit Glass Signal,<br />
//                     Off SV Road, Jogeshwari West, Mumbai - 400 102, Maharashtra, India.
//                   </li>
//                   <li><strong>📞 Phone:</strong> +91 7021710954</li>
//                   <li><strong>📧 Email:</strong> tabassum@infatech.in</li>
//                   <li><strong>⏰ Working Hours:</strong> Mon–Sat, 9 AM – 6 PM</li>
//                 </ul>
//               </div>
//             </div>

//             {/* Zoho Form Iframe */}
//             <div className="col-md-6">
//               <div className="p-3 h-100 border rounded-4 shadow-sm bg-white d-flex align-items-center justify-content-center">
//                 <iframe
//                   src="https://zcsub-cmpzourl.maillist-manage.com/ua/Optin?od=11287ecd0b7d76&zx=112b29489&sD=114de58d5989d4f75"
//                   width="100%"
//                   height="650"
//                   frameBorder="0"
//                   style={{
//                     border: 'none',
//                     borderRadius: '1rem',
//                     backgroundColor: '#0b0b27', // same as form color
//                   }}
//                   title="Zoho Contact Form"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import Form from "../Form/Form";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import VideoModal from "../VideoModal/VideoModal";
import Image from 'next/image';

const Contact1 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const [iframeSrc, setIframeSrc] = useState("about:blank");
  const [toggle, setToggle] = useState(false);

  const handelClick = () => {
    setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
    setToggle(true);
  };

  const handelClose = () => {
    setIframeSrc("about:blank");
    setToggle(false);
  };

  return (
    <div className="contact-area py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side – Title + Form */}
          <div className="col-md-6">
            <SectionTitle
              SubTitle="Get in Touch"
              Title="Have questions? <br/>Reach out to us directly using the contact form or the details below."
            />
            <Form />
          </div>

          {/* Right Side – Video Play Box */}
          <div className="col-md-6">
          <div className="about-us-thumb">
            <div className="about-us-img">
              <Image src="/assets/images/cus.png" alt="img" width={635} height={520}   />
            </div>
                          {/* <div className="about-us-video-icon" onClick={handelClick}>	
                            <span className="video-vemo-icon venobox vbox-item" data-vbtype="youtube" data-autoplay="true"><i className="bi bi-play"></i><span>WATCH VIDEO</span></span>
                          </div>"/assets/images/Contactusnew.png"
                          <div className="about-us-shape">
                          <Image src="/assets/images/inner/us-shape.png" alt="img" width={103} height={22}   />
                          </div> */}
            </div>
            </div>
          {/* <div className="col-md-6">
              <div className="p-4 h-100">
                <h2 className="mb-3 fw-bold">Get in Touch</h2>
                <p className="text-muted mb-4">
                  Have questions? Reach out to us directly using the contact form or the details below.
                </p>
                <ul className="list-unstyled lh-lg">
                  <li>
                    <strong>📍 Address:</strong><br />
                    Office No. 205, Pearl Platinum Commercial Building,<br />
                    Chandiwala Complex, Near Ajit Glass Signal,<br />
                    Off SV Road, Jogeshwari West, Mumbai - 400 102, Maharashtra, India.
                  </li>
                  <li><strong>📞 Phone:</strong> +91 7021710954</li>
                  <li><strong>📧 Email:</strong> tabassum@infatech.in</li>
                  <li><strong>⏰ Working Hours:</strong> Mon–Sat, 9 AM – 6 PM</li>
                </ul>
              </div>
            </div> */}
        </div>
        <div className="col-md-6">
        <div className="p-4 h-100">
                {/* <h2 className="mb-3 fw-bold">Get in Touch</h2> */}
                
                <ul className="list-unstyled lh-lg fw-bold">
                  <li>
                    <strong>📍 Address:</strong><br />
                    Office No. 205, Pearl Platinum Commercial Building,<br />
                    Chandiwala Complex, Near Ajit Glass Signal,<br />
                    Off SV Road, Jogeshwari West, Mumbai - 400 102, Maharashtra, India.
                  </li>
                  <li><strong>📞 Phone:</strong> +91 7021710954</li>
                  <li><strong>📧 Email:</strong> tabassum@infatech.in</li>
                  <li><strong>⏰ Working Hours:</strong> Mon–Sat, 9 AM – 6 PM</li>
                </ul>
              </div>
              </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}
      />
    </div>
  );
};

export default Contact1;
