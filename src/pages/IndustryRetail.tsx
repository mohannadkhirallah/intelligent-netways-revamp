import React from 'react';
import HeroSection from '@/components/HeroSection';

const IndustryRetail = () => {
  return (
    <div>
      <HeroSection
        subtitle="Retail & Consumer Goods"
        title="Omnichannel Customer Experience"
        description="Create personalized shopping experiences with AI-powered insights, inventory optimization, and customer analytics."
        primaryCTA={{ text: "Learn More", href: "/contact" }}
        backgroundType="gradient"
      />
    </div>
  );
};

export default IndustryRetail;