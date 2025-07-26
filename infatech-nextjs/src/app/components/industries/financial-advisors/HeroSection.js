// import Image from "next/image";

// const HeroSection = () => (
  // <section className="bg-dark text-white py-5 px-3 px-md-5">
   

  //   {/* <div className="bg-white rounded shadow p-4 hover-shadow transition">
  //     <h3 className="h5 fw-bold text-dark">Financial Planning</h3>
  //     <p className="text-secondary mt-2">Helping you grow your wealth smartly.</p>
  //     <button className="mt-3 btn btn-warning text-dark fw-semibold px-3 py-2">
  //       Book Now
  //     </button>
  //   </div> */}

  //   <div className="container my-5">
  //     <div className="row align-items-center g-4">
  //       <div className="col-md-6">
  //         <h1 className="display-5 fw-bold  text-light mb-3">
  //           Ravi Shah,<br />
  //           <span className="text-warning">Your Trusted Financial Advisor</span>
  //         </h1>
  //         <p className="lead text-light mb-3">
  //           Helping you plan, grow, and protect your wealth — with honest advice and proven solutions.
  //         </p>
  //         <p className="text-secondary mb-4">
  //           Hi, I’m Ravi Shah, an AMFI-registered Mutual Fund Distributor with 12 years of experience in guiding families and professionals toward their financial goals.
  //         </p>
  //         <button className="btn btn-warning text-dark fw-semibold px-4 py-3">
  //           Book a Free Consultations
  //         </button>
  //       </div>

  //       <div className="col-md-6 d-flex justify-content-center">

  //         <div className="bg-white p-3 rounded shadow">
  //           <Image
  //             src="/assets/financial-advisors/hero.png"
  //             alt="Hero Illustration"
  //             width={400}
  //             height={400}
  //             className="img-fluid object-fit-contain"
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </section>
// );

// export default HeroSection;
// import React, { useState } from 'react';
// import { ArrowRight } from 'lucide-react';
// import Chatbot from './Chatbot';

// const HeroSection = () => {
//   const [showEmbeddedChatbot, setShowEmbeddedChatbot] = useState(false);

//   return (
//     <section
//       className="position-relative py-5 text-white min-vh-100"
//       style={{
//         backgroundImage: 'url(https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat'
//       }}
//     >
//       {/* Dark overlay */}
//       <div
//         className="position-absolute top-0 start-0 w-100 h-100"
//         style={{ backgroundColor: 'rgba(9, 17, 38, 0.7)', zIndex: 1 }}
//       ></div>

//       {/* Content */}
//       <div className="container position-relative d-flex align-items-center min-vh-100 px-4" style={{ zIndex: 2 }}>
//         <div
//           className={`w-100 d-flex flex-column ${showEmbeddedChatbot ? 'flex-lg-row align-items-center gap-4' : ''}`}
//         >
//           {/* Left Column */}
//           <div className={`${showEmbeddedChatbot ? 'col-lg-6 text-lg-start text-center' : 'text-center w-100 mx-auto'}`}>
//             <div className={`mb-4 d-flex flex-column ${showEmbeddedChatbot ? 'align-items-lg-start align-items-center' : 'align-items-center'} justify-content-center`}>
//               <img
//                 src="/src/assets/Infatech Logo.png"
//                 alt="Infatech Logo"
//                 className="mb-3"
//                 style={{ height: '80px', width: '80px', objectFit: 'contain' }}
//               />
//               <div className={`${showEmbeddedChatbot ? 'text-lg-start text-center' : 'text-center'}`}>
//                 <h1 className="display-4 fw-bold text-white">
//                   Your Own IFA Website
//                 </h1>
//                 <p className="fs-4 fw-semibold text-warning mt-2 text-shadow">
//                   Ready in 7 Days
//                 </p>
//               </div>
//             </div>

//             <p className={`fs-5 fw-medium mb-4 ${showEmbeddedChatbot ? 'text-lg-start text-center' : 'text-center'}`}>
//               <span className="text-white text-shadow">
//                 Your clients are online — your practice should be too.
//               </span>
//             </p>

//             {/* CTA Buttons */}
//             <div className={`mb-5 ${showEmbeddedChatbot ? 'd-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start' : ''}`}>
//               <button
//                 onClick={() => setShowEmbeddedChatbot(true)}
//                 className="btn btn-warning text-white fw-bold px-4 py-3 d-flex align-items-center mx-auto shadow"
//                 style={{
//                   backgroundColor: '#f97316',
//                   transition: 'all 0.2s ease'
//                 }}
//               >
//                 {showEmbeddedChatbot ? 'CHAT NOW' : 'GET STARTED NOW'}
//                 <div className="bg-white bg-opacity-25 p-1 rounded-circle ms-3">
//                   <ArrowRight className="h-5 w-5" />
//                 </div>
//               </button>

//               {showEmbeddedChatbot && (
//                 <button
//                   onClick={() => setShowEmbeddedChatbot(false)}
//                   className="btn btn-outline-light fw-bold px-4 py-3 d-flex align-items-center mx-auto shadow border border-white border-opacity-50"
//                   style={{
//                     backgroundColor: 'rgba(255,255,255,0.1)',
//                     transition: 'all 0.2s ease'
//                   }}
//                 >
//                   CLOSE CHAT
//                 </button>
//               )}
//             </div>
//           </div>

//           {/* Right Column - Chatbot */}
//           {showEmbeddedChatbot && (
//             <div className="col-lg-6 d-flex justify-content-center align-items-center mt-4 mt-lg-0">
//               <div className="w-100" style={{ maxWidth: '400px', height: '400px' }}>
//                 <Chatbot
//                   embedded={true}
//                   isOpen={showEmbeddedChatbot}
//                   onClose={() => setShowEmbeddedChatbot(false)}
//                 />
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import React, { useState } from 'react';
import Chatbot from '../financial-advisors/Chatbot';
import Image from 'next/image';

const HeroSection = () => {
  const [showEmbeddedChatbot, setShowEmbeddedChatbot] = useState(false);

  return (
    <section className="bg-dark text-white py-5 px-3 px-md-5">
      <div className="container my-5">
        <div className="row align-items-center g-4">
          {/* Left Column */}
          <div className="col-md-6">
            <h1 className="display-5 fw-bold text-light mb-3">
              Ravi Shah,<br />
              <span className="text-warning">Your Trusted Financial Advisor</span>
            </h1>
            <p className="lead text-light mb-3">
              Helping you plan, grow, and protect your wealth — with honest advice and proven solutions.
            </p>
            <p className="text-secondary mb-4">
              Hi, I’m Ravi Shah, an AMFI-registered Mutual Fund Distributor with 12 years of experience in guiding families and professionals toward their financial goals.
            </p>

            {/* Toggle Button */}
            {!showEmbeddedChatbot ? (
              <button
                onClick={() => setShowEmbeddedChatbot(true)}
                className="btn btn-warning text-dark fw-semibold px-4 py-3"
                style={{ backgroundColor: '#ffc107', border: 'none' }}
              >
                TRY CHATBOT NOW
              </button>
            ) : (
              <button
                onClick={() => setShowEmbeddedChatbot(false)}
                className="btn btn-outline-light fw-semibold px-4 py-3"
              >
                Close Chat
              </button>
            )}
          </div>

          {/* Right Column */}
          <div className="col-md-6 d-flex justify-content-center">
            {showEmbeddedChatbot ? (
              <div className="w-100" style={{ maxWidth: '500px', height: '400px' }}>
                <Chatbot
                  embedded={true}
                  isOpen={showEmbeddedChatbot}
                  onClose={() => setShowEmbeddedChatbot(false)}
                />
              </div>
            ) : (
              <div className="bg-white p-3 rounded shadow">
                <Image
                  src="/assets/financial-advisors/hero.png"
                  alt="Hero Illustration"
                  width={400}
                  height={400}
                  className="img-fluid object-fit-contain"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
