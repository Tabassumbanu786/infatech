import React from 'react';
import { Check, X } from 'lucide-react';

const packageFeatures = [
  { name: "Custom Website (5 Pages)", included: true },
  { name: "Domain + Hosting (1st Year)", included: true },
  { name: "SIP/EMI Calculators", included: true },
  { name: "Downloadable Planning Templates", included: true },
  { name: "Live News Feed + Market Ticker", included: true },
  { name: "Basic SEO Setup", included: true },
  { name: "Mobile + Tablet Friendly Design", included: true },
  { name: "Built-in Client Query Chatbot", included: true },
  { name: "SSL + Website Security", included: true },
  { name: "Google Maps / WhatsApp Button", included: "optional" }
];

const FeatureGrid = () => {
  return (
    <div className="container py-4">
         <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-dark-navy mb-4 leading-tight">What's Inside the Package</h2>
          </div>
      <div className="row gy-3">
        {packageFeatures.map((feature, index) => (
          <div className="col-md-6" key={index}>
            <div className="bg-white p-3 rounded-3 shadow-sm d-flex align-items-center gap-3 border hover-shadow transition">
              <div className="flex-shrink-0">
                {feature.included === true ? (
                  <div
                    className="p-2 rounded-circle d-flex align-items-center justify-content-center"
                    style={{ backgroundColor: 'rgba(249, 115, 22, 0.15)' }}
                  >
                    <Check size={18} color="#f97316" />
                  </div>
                ) : feature.included === "optional" ? (
                  <div
                    className="p-2 rounded-circle d-flex align-items-center justify-content-center"
                    style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)' }}
                  >
                    <Check size={18} color="#3b82f6" />
                  </div>
                ) : (
                  <div
                    className="p-2 rounded-circle d-flex align-items-center justify-content-center"
                    style={{ backgroundColor: 'rgba(239, 68, 68, 0.15)' }}
                  >
                    <X size={18} color="#ef4444" />
                  </div>
                )}
              </div>
              <div className="flex-grow-1">
                <span className="fw-medium text-dark">{feature.name}</span>
                {feature.included === "optional" && (
                  <span className="text-primary ms-2 small fw-semibold">(Optional)</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;
