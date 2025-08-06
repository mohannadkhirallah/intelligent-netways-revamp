import React from 'react';
import HeroSection from '@/components/HeroSection';

const IndustryManufacturing = () => {
  return (
    <div>
      <HeroSection
        subtitle="Manufacturing & Resources"
        title="Industry 4.0 Transformation"
        description="Enable smart manufacturing with IoT, predictive maintenance, and intelligent supply chain solutions."
        primaryCTA={{ text: "Learn More", href: "/contact" }}
        backgroundType="gradient"
      />
    </div>
  );
};

export default IndustryManufacturing;