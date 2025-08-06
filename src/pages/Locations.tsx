import React from 'react';
import HeroSection from '@/components/HeroSection';

const Locations = () => {
  return (
    <div>
      <HeroSection
        subtitle="Global Presence"
        title="Find Our Locations"
        description="Discover our worldwide offices and connect with our local teams across MENA, North America, and beyond."
        primaryCTA={{ text: "Contact Us", href: "/contactus" }}
        backgroundType="gradient"
      />
    </div>
  );
};

export default Locations;