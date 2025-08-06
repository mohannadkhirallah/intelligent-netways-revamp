import React from 'react';
import HeroSection from '@/components/HeroSection';

const IndustryFinancial = () => {
  return (
    <div>
      <HeroSection
        subtitle="Financial Services"
        title="Digital Banking & Fintech Innovation"
        description="Accelerate digital transformation with secure, compliant, and customer-centric financial solutions."
        primaryCTA={{ text: "Learn More", href: "/contact" }}
        backgroundType="gradient"
      />
    </div>
  );
};

export default IndustryFinancial;