import React from 'react';
import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Users, 
  Network, 
  Cloud, 
  ArrowRight, 
  CheckCircle, 
  Award,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react';

const Home = () => {
  const pillars = [
    {
      icon: Users,
      title: 'Human Experience',
      description: 'Transforming how people work, collaborate, and engage with technology to create meaningful experiences.',
      features: ['Employee Empowerment', 'Customer Engagement', 'Digital Workspace'],
      color: 'text-primary'
    },
    {
      icon: Brain,
      title: 'Mind Collaboration',
      description: 'Leveraging AI and intelligent tools to enhance decision-making and unlock human potential.',
      features: ['AI-Powered Insights', 'Smart Automation', 'Knowledge Management'],
      color: 'text-accent'
    },
    {
      icon: Network,
      title: 'Thing Interaction',
      description: 'Connecting devices, systems, and processes through IoT and intelligent edge computing.',
      features: ['IoT Solutions', 'Edge Computing', 'Connected Devices'],
      color: 'text-success'
    },
    {
      icon: Cloud,
      title: 'Intelligent Cloud Platform',
      description: 'Scalable, secure, and intelligent cloud infrastructure powering digital transformation.',
      features: ['Azure Cloud', 'Hybrid Solutions', 'Cloud Security'],
      color: 'text-info'
    }
  ];

  const capabilities = [
    {
      icon: TrendingUp,
      title: 'Advisory Services',
      description: 'Strategic roadmaps and digital transformation planning',
      stats: '500+ Projects'
    },
    {
      icon: Zap,
      title: 'Project Delivery',
      description: 'Certified implementation and integration services',
      stats: '99.5% Success Rate'
    },
    {
      icon: Shield,
      title: 'Managed Services',
      description: '24/7 support and proactive monitoring',
      stats: '24/7 Availability'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        subtitle="Intelligent Digital Transformation"
        title="Evolve Your Business with Intelligence"
        description="Empower your organization with cutting-edge Microsoft technologies and expert guidance. We enable intelligent evolution through Human Experience, Mind Collaboration, Thing Interaction, and our Intelligent Cloud Platform."
        primaryCTA={{
          text: "Start Your Transformation",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Watch Our Story",
          href: "/about"
        }}
        features={[
          "Microsoft Gold Partner & Inner Circle",
          "1,000+ Certified Professionals",
          "2,500+ Customers Served",
          "20+ Years of Excellence"
        ]}
        backgroundType="image"
      />

      {/* Strategic Pillars */}
      <SectionWrapper background="default" padding="xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Approach
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Four Strategic Pillars of Intelligence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our intelligent transformation framework is built on four foundational pillars that enable 
            organizations to evolve and thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <Card key={index} className="bg-gradient-card hover:shadow-lg transition-all duration-300 border-0 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                  <pillar.icon className={`w-8 h-8 ${pillar.color}`} />
                </div>
                <CardTitle className="text-xl">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-center">
                  {pillar.description}
                </CardDescription>
                <div className="space-y-2">
                  {pillar.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Capabilities Overview */}
      <SectionWrapper background="muted" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <Badge variant="outline" className="mb-4">
                Our Services
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Comprehensive Digital Transformation Services
              </h2>
              <p className="text-lg text-muted-foreground">
                From strategic planning to implementation and ongoing support, we deliver 
                end-to-end solutions that drive measurable business outcomes.
              </p>
            </div>

            <div className="space-y-6">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-background rounded-lg shadow-sm">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <capability.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground">{capability.title}</h3>
                      <Badge variant="secondary">{capability.stats}</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">{capability.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="group">
              Explore Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="space-y-6">
            <Card className="bg-gradient-primary text-primary-foreground border-0">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8" />
                  <div>
                    <CardTitle className="text-white">Microsoft Inner Circle</CardTitle>
                    <CardDescription className="text-primary-foreground/80">
                      Top 1% Global Recognition
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/90">
                  Recognized as one of the top Microsoft partners globally, delivering exceptional 
                  value and innovation to our customers.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold text-primary">40%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Average Cost Reduction</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold text-success">99.9%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Service Uptime</p>
                </CardContent>
              </Card>
            </div>

            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-3">Microsoft Specializations</h3>
              <div className="flex flex-wrap gap-2">
                {['Azure', 'Modern Work', 'Business Applications', 'Data & AI', 'Security', 'Digital & App Innovation'].map((spec, index) => (
                  <Badge key={index} variant="secondary">{spec}</Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper background="gradient" padding="xl">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join 2,500+ organizations that trust Netways for their digital transformation journey. 
            Let's build the future together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button variant="hero" size="lg" className="group">
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Home;