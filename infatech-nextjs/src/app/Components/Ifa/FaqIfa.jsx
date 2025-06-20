"use client";
import { useEffect, useRef, useState } from 'react';
import SectionTitle from '../Common/SectionTitle';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Image from 'next/image';

const FaqIfa = ({ faqs }) => {
  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  const handleItemClick = index => {
    if (index === openItemIndex) {
      setOpenItemIndex(-1);
    } else {
      setOpenItemIndex(index);
    }
  };

  useEffect(() => {
    if (firstItemOpen) {
      setOpenItemIndex(0);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen]);

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div className="faq-area style-two" data-background="/assets/images/home-3/faq-bg.png">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="section-title text-left">
              <SectionTitle SubTitle="FAQs" Title="Common <span>Questions</span>" />
            </div>
            <div className="tab_container">
              <div id="tab1" className="tab_content">
                <ul className="accordion">
                  {faqs.map((item, index) => (
                    <li key={index} className={`cs_accordian ${index === openItemIndex ? 'active' : ''}`}>
                      <a onClick={() => handleItemClick(index)}><span>{item.q}</span></a>
                      <p ref={accordionContentRef}>{item.a}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="faq-thumb faq_thumb_area mt -5">
              <Image src="/assets/images/home-3/faq-thumb.png" alt="faq" width={700} height={782} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqIfa;
