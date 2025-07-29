import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyItMatters = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="bg-white rounded-4 shadow p-4 p-md-5">
              <h2 className="text-center mb-4 fw-bold fs-1">🧭 {data.title}</h2>

              {data.intro.map((text, i) => (
                <p key={i} className="text-center fs-5 mb-3">
                  {text}
                </p>
              ))}

              <p className="text-center fs-5 fw-semibold mb-5">
                {data.subheading}
              </p>

              <div className="row gy-4">
                {data.points.map((point, index) => (
                  <div className="col-md-6 d-flex" key={index}>
                    <div className="me-3 d-flex align-items-start">
                      <div className={`bg-${point.color || 'primary'} bg-opacity-25 p-2 rounded-circle`}>
                        <CheckCircle size={24} className={`text-${point.color || 'primary'}`} />
                      </div>
                    </div>
                    <div className="fs-5 text-dark">{point.text}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
