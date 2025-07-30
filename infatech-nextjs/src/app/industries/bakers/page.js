// src/app/industries/bakers/page.js

'use client';
import React, { useEffect, useRef, useState } from 'react';

import Chatbot from '../../components/industries/financial-advisors/Chatbot'
import TemplateGallery from '../../components/Gallery/TemplateGallery';
import TemplatePreview from '../../components/Gallery/TemplatePreview';


import BakersPageContent from "../../components/industries/bakers/BakersPage";
import Layout from "../bakers/layout";
import WhyItMatters from '../../ifa-website/WhyItMatters';
import FeatureGrid from '../../ifa-website/FeatureGrid';
import whyItMattersConfig from '../../Data/industries/whyItMattersConfig'
import EverythingYouNeed from '../../ifa-website/EverythingYouNeed';
import everythingYouNeedConfig from '../../Data/industries/everythingYouNeedConfig'
import packageFeaturesConfig from '../../Data/industries/packageFeaturesConfig'
import heroSectionConfig from '../../Data/industries/heroSectionConfig'

import PricingTimeline from '../../ifa-website/PricingTimeline';
import GoLiveTimeline from '../../ifa-website/GoLiveTimeline';
import CtaSection from '../../ifa-website/CtaSection';



export default function BakersPage() {
 
  return (
      <BakersPageContent/> 
  );
}
