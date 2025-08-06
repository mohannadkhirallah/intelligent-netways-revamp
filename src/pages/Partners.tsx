import React from 'react';
import HeroSection from '@/components/HeroSection';

const Partners = () => {
  return (
    <div>
      <HeroSection
        subtitle="Strategic Partnerships"
        title="Our Technology Partners"
        description="Leveraging world-class partnerships to deliver cutting-edge solutions and exceptional value to our clients."
        primaryCTA={{ text: "Become a Partner", href: "/contactus" }}
        backgroundType="gradient"
      />
    </div>
  );
};

export default Partners;