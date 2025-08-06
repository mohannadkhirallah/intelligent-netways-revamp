import React from 'react';
import HeroSection from '@/components/HeroSection';

const IndustryHealthcare = () => {
  return (
    <div>
      <HeroSection
        subtitle="Healthcare & Life Sciences"
        title="Intelligent Patient Care"
        description="Transform healthcare delivery with AI-powered patient insights, seamless care coordination, and advanced clinical analytics."
        primaryCTA={{ text: "Learn More", href: "/contactus" }}
        backgroundType="gradient"
      />
    </div>
  );
};

export default IndustryHealthcare;