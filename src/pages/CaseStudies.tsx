import React from 'react';
import HeroSection from '@/components/HeroSection';

const CaseStudies = () => {
  return (
    <div>
      <HeroSection
        subtitle="Success Stories"
        title="Proven Results Across Industries"
        description="Discover how we've helped organizations achieve measurable digital transformation outcomes."
        primaryCTA={{ text: "View Case Studies", href: "/contact" }}
        backgroundType="gradient"
      />
    </div>
  );
};

export default CaseStudies;