import React from 'react';
import HeroSection from '@/components/HeroSection';

const About = () => {
  return (
    <div>
      <HeroSection
        subtitle="About Netways"
        title="20+ Years of Microsoft Excellence"
        description="Leading Microsoft Gold Partner and Inner Circle member serving 2,500+ customers across MENA and North America with 1,000+ certified professionals."
        primaryCTA={{ text: "Learn More", href: "/contact" }}
        backgroundType="gradient"
      />
    </div>
  );
};

export default About;