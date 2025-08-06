import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  features?: string[];
  backgroundType?: 'gradient' | 'image' | 'default';
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  features,
  backgroundType = 'default'
}) => {
  const getBackgroundStyles = () => {
    switch (backgroundType) {
      case 'gradient':
        return 'bg-gradient-hero';
      case 'image':
        return `bg-cover bg-center bg-no-repeat`;
      default:
        return 'bg-gradient-secondary';
    }
  };

  return (
    <section 
      className={`relative min-h-[80vh] flex items-center py-20 ${getBackgroundStyles()}`}
      style={backgroundType === 'image' ? { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${heroImage})` } : {}}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <CheckCircle className="w-4 h-4" />
              <span>Microsoft Gold Partner & Inner Circle</span>
            </div>

            {/* Subtitle */}
            <p className={`text-lg font-medium ${backgroundType === 'image' ? 'text-accent' : 'text-primary'}`}>
              {subtitle}
            </p>

            {/* Main Title */}
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${backgroundType === 'image' ? 'text-white' : 'text-foreground'}`}>
              {title}
            </h1>

            {/* Description */}
            <p className={`text-xl leading-relaxed max-w-2xl ${backgroundType === 'image' ? 'text-gray-200' : 'text-muted-foreground'}`}>
              {description}
            </p>

            {/* Features List */}
            {features && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className={`flex items-center space-x-2 ${backgroundType === 'image' ? 'text-white' : 'text-foreground'}`}>
                    <CheckCircle className={`w-5 h-5 ${backgroundType === 'image' ? 'text-accent' : 'text-success'}`} />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                variant={backgroundType === 'image' ? 'gradient' : 'hero'} 
                size="lg"
                className="group"
              >
                {primaryCTA.text}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              {secondaryCTA && (
                <Button 
                  variant={backgroundType === 'image' ? 'outline' : 'outline'} 
                  size="lg"
                  className={`group ${backgroundType === 'image' ? 'border-white text-white hover:bg-white hover:text-foreground' : ''}`}
                >
                  <Play className="w-4 h-4 mr-2" />
                  {secondaryCTA.text}
                </Button>
              )}
            </div>

            {/* Stats or Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/20">
              <div className="text-center">
                <div className={`text-2xl font-bold ${backgroundType === 'image' ? 'text-white' : 'text-foreground'}`}>
                  1,000+
                </div>
                <div className={`text-sm ${backgroundType === 'image' ? 'text-gray-300' : 'text-muted-foreground'}`}>
                  Certified Professionals
                </div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${backgroundType === 'image' ? 'text-white' : 'text-foreground'}`}>
                  2,500+
                </div>
                <div className={`text-sm ${backgroundType === 'image' ? 'text-gray-300' : 'text-muted-foreground'}`}>
                  Customers Served
                </div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${backgroundType === 'image' ? 'text-white' : 'text-foreground'}`}>
                  20+
                </div>
                <div className={`text-sm ${backgroundType === 'image' ? 'text-gray-300' : 'text-muted-foreground'}`}>
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-gradient-card p-8 rounded-2xl shadow-xl">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-foreground">Why Choose Netways?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Microsoft Inner Circle</h4>
                      <p className="text-sm text-muted-foreground">Top 1% globally recognized partner</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">6 Solutions Partner Designations</h4>
                      <p className="text-sm text-muted-foreground">Azure, Modern Work, Business Apps</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">24/7 Support</h4>
                      <p className="text-sm text-muted-foreground">Round-the-clock managed services</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-primary">
                <CheckCircle className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;