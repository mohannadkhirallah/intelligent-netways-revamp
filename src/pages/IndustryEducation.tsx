import React from 'react';
import HeroSection from '@/components/HeroSection';

const IndustryEducation = () => {
  return (
    <div>
      <HeroSection
        subtitle="Education"
        title="Digital Learning & Academic Excellence"
        description="Transform education with intelligent learning platforms, collaborative tools, and data-driven insights."
        primaryCTA={{ text: "Learn More", href: "/contact" }}
        backgroundType="gradient"
      />
    </div>
  );
};

export default IndustryEducation;