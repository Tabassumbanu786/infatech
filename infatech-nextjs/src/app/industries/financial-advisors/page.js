// src/app/industries/financial-advisors/page.js

'use client';

import React from "react";


import Layout from "../../components/industries/financial-advisors/Layout";


import HeroSection from "../../components/industries/financial-advisors/HeroSection";
import ServicesSection from "../../components/industries/financial-advisors/ServicesList";
import AboutSection from "../../components/industries/financial-advisors/AboutSection";
import ContactSection from "../../components/industries/financial-advisors/ContactSection";
import Resources from "../../components/industries/financial-advisors/Resources";
import Calculators from "../../components/industries/financial-advisors/Calculators";
import Chatbot from "../../components/industries/financial-advisors/Chatbot";
const ifaData = {
  name: "Ravi Shah",
  experience: 12,
};

export default function FinancialAdvisorsPage() {
  return (
    <Layout>
      
      <HeroSection ifaData={ifaData} />
      <ServicesSection ifaData={ifaData} />
      <Calculators/>
      <Resources/>
      <AboutSection ifaData={ifaData} />
      <ContactSection
        ifaData={{
          phone: "9876543210",
          email: "abc@example.com",
          location: "Mumbai",
        }}
      />
    
      
    </Layout>
  );
}
