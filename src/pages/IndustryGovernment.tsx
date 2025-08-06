import React from 'react';
import HeroSection from '@/components/HeroSection';

const IndustryGovernment = () => {
  return (
    <div>
      <HeroSection
        subtitle="Government Digital Transformation"
        title="Citizen-Centric Digital Services"
        description="Transform public services with intelligent automation, enhanced citizen engagement, and transparent governance solutions."
        primaryCTA={{ text: "Learn More", href: "/contact" }}
        backgroundType="gradient"
      />
    </div>
  );
};

export default IndustryGovernment;