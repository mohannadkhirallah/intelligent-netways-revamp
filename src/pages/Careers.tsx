import React from 'react';
import HeroSection from '@/components/HeroSection';

const Careers = () => {
  return (
    <div>
      <HeroSection
        subtitle="Join Our Team"
        title="Build the Future with Netways"
        description="Join our team of 1,000+ certified professionals driving digital transformation across the globe."
        primaryCTA={{ text: "View Opportunities", href: "/contact" }}
        backgroundType="gradient"
      />
    </div>
  );
};

export default Careers;