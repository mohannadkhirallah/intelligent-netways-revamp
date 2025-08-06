import React from 'react';
import HeroSection from '@/components/HeroSection';

const PrivacyPolicy = () => {
  return (
    <div>
      <HeroSection
        subtitle="Legal Information"
        title="Privacy Policy"
        description="Our commitment to protecting your privacy and personal data in accordance with global privacy standards."
        primaryCTA={{ text: "Contact Us", href: "/contactus" }}
        backgroundType="gradient"
      />
    </div>
  );
};

export default PrivacyPolicy;