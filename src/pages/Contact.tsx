import React from 'react';
import HeroSection from '@/components/HeroSection';

const Contact = () => {
  return (
    <div>
      <HeroSection
        subtitle="Get in Touch"
        title="Start Your Transformation Journey"
        description="Connect with our experts to discuss your digital transformation needs and discover how we can help."
        primaryCTA={{ text: "Schedule Consultation", href: "#contact" }}
        backgroundType="gradient"
      />
    </div>
  );
};

export default Contact;