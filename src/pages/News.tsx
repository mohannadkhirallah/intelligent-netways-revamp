import React from 'react';
import HeroSection from '@/components/HeroSection';

const News = () => {
  return (
    <div>
      <HeroSection
        subtitle="News & Updates"
        title="Latest from Netways"
        description="Stay updated with our latest partnerships, recognitions, and industry insights."
        primaryCTA={{ text: "View All News", href: "/contact" }}
        backgroundType="gradient"
      />
    </div>
  );
};

export default News;