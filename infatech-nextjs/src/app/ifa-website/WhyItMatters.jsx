import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyItMatters = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="bg-white rounded-4 shadow p-4 p-md-5">
              <h2 className="text-center mb-4 fw-bold fs-1">🧭 Why This Matters</h2>
              
              <p className="text-center fs-5 mb-2">
                When a potential client hears about you, the first thing they do? <strong>Google you.</strong>
              </p>
              <p className="text-center fs-5 mb-4">
                If they can't find a clean, trustworthy website that shows what you do — they may move on.
              </p>
              <p className="text-center fs-5 fw-semibold mb-5">
                Our IFA Website Starter Pack helps you:
              </p>

              <div className="row gy-4">
                <div className="col-md-6 d-flex">
                  <div className="me-3 d-flex align-items-start">
                    <div className="bg-warning bg-opacity-25 p-2 rounded-circle">
                      <CheckCircle size={24} className="text-warning" />
                    </div>
                  </div>
                  <div className="fs-5 text-dark">Build credibility instantly</div>
                </div>

                <div className="col-md-6 d-flex">
                  <div className="me-3 d-flex align-items-start">
                    <div className="bg-primary bg-opacity-25 p-2 rounded-circle">
                      <CheckCircle size={24} className="text-primary" />
                    </div>
                  </div>
                  <div className="fs-5 text-dark">Save time with built-in chatbot for client queries</div>
                </div>

                <div className="col-md-6 d-flex">
                  <div className="me-3 d-flex align-items-start">
                    <div className="bg-success bg-opacity-25 p-2 rounded-circle">
                      <CheckCircle size={24} className="text-success" />
                    </div>
                  </div>
                  <div className="fs-5 text-dark">Offer real tools, calculators, and templates</div>
                </div>

                <div className="col-md-6 d-flex">
                  <div className="me-3 d-flex align-items-start">
                    <div className="bg-purple bg-opacity-25 p-2 rounded-circle">
                      <CheckCircle size={24} className="text-purple" />
                    </div>
                  </div>
                  <div className="fs-5 text-dark">Share services clearly — even while busy</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
