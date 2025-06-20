"use client";
import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle';

const IfaFeatures = ({ features }) => {
  return (
    <div className="feature-area">
      <div className="container">
        <div className="row about align-items-center">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <SectionTitle SubTitle="WHAT'S INCLUDED" Title="Key Features" />
            </div>
          </div>
          {features.map((item, i) => (
            <div key={i} className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-sinble-single-box">
                <div className="feature-icon">
                  <Image src={item.icon} alt="icon" width={36} height={36} />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">{item.title}</h3>
                  <p className="feature-text">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IfaFeatures;
