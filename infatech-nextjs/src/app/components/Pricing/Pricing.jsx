import SectionTitle from "../Common/SectionTitle";
import PricingCard from "./PricingCard";

const Pricing = () => {
  const SectionDesc = {
    Content:
      "Infatech brings you affordable website and mobile app solutions. Choose a plan that matches your business goals and scale digitally with us.",
  };

  return (
    <div className="pricing-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="section-title text-left">
              <SectionTitle
                SubTitle="Start Business"
                Title="Choose Your Best Plan"
              ></SectionTitle>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="section-title text-left">
              <p className="section-descr">{SectionDesc.Content}</p>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Starter Plan */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <PricingCard
              Price="₹10,000"
              PricePlan="Starter Plan"
              BtnUrl="/pricing"
              BtnText="GET A QUOTE"
              FeatureList={[
                "1 Professional Website (5 Pages)",
                "Mobile Responsive Design",
                "Basic SEO Setup",
                "Free Domain & Hosting (1 Year)",
                "Email Support",
              ]}
            ></PricingCard>
          </div>

          {/* Business Plan */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <PricingCard
              Price="₹20,000"
              PricePlan="Business Plan"
              BtnUrl="/pricing"
              BtnText="GET A QUOTE"
              FeatureList={[
                "Everything in Starter +",
                "Dynamic Website / Blog Setup",
                "Basic E-commerce (10 Products)",
                "WhatsApp & Chat Integration",
                "Monthly Backup & Maintenance",
              ]}
            ></PricingCard>
          </div>

          {/* Growth Plan */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <PricingCard
              Price="₹30,000"
              PricePlan="Growth Plan"
              BtnUrl="/pricing"
              BtnText="GET A QUOTE"
              FeatureList={[
                "Everything in Business +",
                "Mobile App (Basic Hybrid App)",
                "Payment Gateway Integration",
                "API & Third-Party Integrations",
                "Priority Support",
              ]}
            ></PricingCard>
          </div>

          {/* Premium Plan */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <PricingCard
              Price="₹40,000"
              PricePlan="Premium Plan"
              BtnUrl="/pricing"
              BtnText="GET A QUOTE"
              FeatureList={[
                "Everything in Growth +",
                "Advanced Mobile App (iOS + Android)",
                "Custom Features & AI Automation",
                "Dedicated Account Manager",
                "1 Year Free Maintenance & Hosting",
              ]}
            ></PricingCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
