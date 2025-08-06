import React from 'react';
import HeroSection from '@/components/HeroSection';

const IndustryTelecom = () => {
  return (
    <div>
      <HeroSection
        subtitle="Telecommunications"
        title="Connected Network Innovation"
        description="Enable next-generation connectivity with AI-powered network optimization, customer experience enhancement, and smart infrastructure management."
        primaryCTA={{ text: "Learn More", href: "/contactus" }}
        backgroundType="gradient"
      />
    </div>
  );
};

export default IndustryTelecom;