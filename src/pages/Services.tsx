import React from 'react';
import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Lightbulb, 
  Wrench, 
  Shield, 
  Award,
  CheckCircle,
  ArrowRight,
  Clock,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';

const Services = () => {
  const serviceLines = [
    {
      icon: Lightbulb,
      title: 'Advisory Services',
      description: 'Strategic guidance and digital transformation roadmaps',
      details: [
        'Digital Needs Assessment',
        'Transformation Roadmaps',
        'Architecture Planning',
        'Technology Strategy',
        'Change Management'
      ],
      benefits: ['Reduced implementation risks', 'Clear transformation path', 'Optimized ROI'],
      stats: '500+ Assessments'
    },
    {
      icon: Wrench,
      title: 'Project Services',
      description: 'Certified deployment and integration expertise',
      details: [
        'Microsoft 365 Deployment',
        'Azure Migration',
        'Dynamics 365 Implementation',
        'Custom App Development',
        'System Integration'
      ],
      benefits: ['99.5% project success rate', 'Certified professionals', 'On-time delivery'],
      stats: '1,000+ Projects'
    },
    {
      icon: Shield,
      title: 'Managed Services',
      description: '24/7 support and proactive monitoring',
      details: [
        '24/7 Technical Support',
        'Azure CSP Services',
        'Proactive Monitoring',
        'Security Management',
        'Performance Optimization'
      ],
      benefits: ['99.9% uptime guarantee', 'Cost optimization', 'Peace of mind'],
      stats: '24/7 Support'
    }
  ];

  const credentials = [
    {
      title: 'Microsoft Gold Partner',
      description: '20+ years of partnership excellence',
      icon: Award
    },
    {
      title: 'Inner Circle Member',
      description: 'Top 1% global recognition',
      icon: TrendingUp
    },
    {
      title: '6 Solution Designations',
      description: 'Azure, Modern Work, Business Apps',
      icon: CheckCircle
    },
    {
      title: 'Advanced Specializations',
      description: 'Azure Expert MSP, Analytics on Azure',
      icon: Zap
    }
  ];

  const benefits = [
    {
      metric: '99.9%',
      description: 'Service Uptime',
      detail: 'Guaranteed availability'
    },
    {
      metric: '40%',
      description: 'Cost Reduction',
      detail: 'Average client savings'
    },
    {
      metric: '24/7',
      description: 'Support Coverage',
      detail: 'Round-the-clock assistance'
    },
    {
      metric: '2.5K+',
      description: 'Satisfied Customers',
      detail: 'Across MENA & North America'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        subtitle="Comprehensive Service Portfolio"
        title="Expert Services for Digital Success"
        description="From strategic advisory to full implementation and ongoing support, our certified professionals deliver end-to-end Microsoft solutions with guaranteed results."
        primaryCTA={{
          text: "Explore Services",
          href: "#services"
        }}
        secondaryCTA={{
          text: "Contact Experts",
          href: "/contact"
        }}
        features={[
          "Microsoft Gold Partner & Inner Circle",
          "1,000+ Certified Professionals",
          "99.9% Service Uptime Guarantee",
          "24/7 Global Support Coverage"
        ]}
        backgroundType="gradient"
      />

      {/* Service Lines */}
      <SectionWrapper id="services" background="default" padding="xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Three Comprehensive Service Lines
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you need strategic guidance, expert implementation, or ongoing support, 
            our certified teams deliver exceptional results at every stage of your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {serviceLines.map((service, index) => (
            <Card key={index} className="bg-gradient-card hover:shadow-lg transition-all duration-300 border-0 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-center">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Service Offerings</h4>
                  <div className="space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span className="text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Benefits</h4>
                  <div className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="text-sm text-muted-foreground">
                        • {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{service.stats}</Badge>
                    <Button variant="ghost" size="sm" className="group">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Microsoft Credentials */}
      <SectionWrapper background="muted" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <Badge variant="outline" className="mb-4">
                Microsoft Partnership
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Proven Microsoft Expertise
              </h2>
              <p className="text-lg text-muted-foreground">
                As a Microsoft Gold Partner and Inner Circle member, we bring the highest 
                level of certification and expertise to every engagement.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-background rounded-lg shadow-sm">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <credential.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{credential.title}</h3>
                    <p className="text-xs text-muted-foreground">{credential.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Card className="bg-gradient-primary text-primary-foreground border-0 p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8" />
                  <h3 className="text-xl font-bold">Why Our Credentials Matter</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Access to latest Microsoft technologies and roadmaps</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Priority support and escalation channels</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Preferred pricing and licensing benefits</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Continuous training and certification programs</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Service Benefits & Metrics</h3>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center p-6">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-3xl font-bold text-primary">{benefit.metric}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <h4 className="font-semibold text-foreground">{benefit.description}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="p-6">
              <h4 className="font-semibold text-foreground mb-4">Service Level Guarantees</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                  <span className="text-sm font-medium">Response Time</span>
                  <Badge variant="outline" className="text-success border-success">
                    &lt; 2 hours
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                  <span className="text-sm font-medium">Resolution Time</span>
                  <Badge variant="outline" className="text-primary border-primary">
                    &lt; 24 hours
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg">
                  <span className="text-sm font-medium">Uptime SLA</span>
                  <Badge variant="outline" className="text-accent border-accent">
                    99.9%+
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper background="gradient" padding="xl">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with our certified experts to discuss your requirements and 
            discover how our services can accelerate your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button variant="hero" size="lg" className="group">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              View Service Catalog
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Services;