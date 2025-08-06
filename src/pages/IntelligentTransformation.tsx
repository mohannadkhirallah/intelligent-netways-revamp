import React from 'react';
import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Users, 
  Network, 
  Cloud, 
  ArrowRight,
  CheckCircle,
  Target,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react';

const IntelligentTransformation = () => {
  const transformationPillars = [
    {
      icon: Users,
      title: 'Customer Experience',
      problem: 'Disconnected customer touchpoints leading to poor satisfaction',
      solution: 'Unified, intelligent customer engagement platforms',
      benefits: ['40% increase in customer satisfaction', 'Personalized experiences', 'Real-time insights']
    },
    {
      icon: Brain,
      title: 'Employee Collaboration',
      problem: 'Siloed teams and inefficient communication',
      solution: 'AI-powered collaboration tools and intelligent workspaces',
      benefits: ['50% faster decision making', 'Enhanced productivity', 'Remote work enablement']
    },
    {
      icon: Network,
      title: 'Thing Interaction',
      problem: 'Manual processes and disconnected devices',
      solution: 'IoT integration and intelligent automation',
      benefits: ['30% operational efficiency', 'Predictive maintenance', 'Real-time monitoring']
    }
  ];

  const platformCapabilities = [
    {
      category: 'Productivity',
      description: 'Microsoft 365, Teams, and modern workplace solutions',
      tools: ['Microsoft 365', 'Teams', 'SharePoint', 'OneDrive']
    },
    {
      category: 'Data Intelligence',
      description: 'Advanced analytics, AI, and business intelligence',
      tools: ['Power BI', 'Azure Synapse', 'Cognitive Services', 'Machine Learning']
    },
    {
      category: 'Security',
      description: 'Zero-trust security and identity management',
      tools: ['Azure AD', 'Defender', 'Sentinel', 'Information Protection']
    },
    {
      category: 'Management',
      description: 'Cloud infrastructure and application management',
      tools: ['Azure Monitor', 'DevOps', 'Resource Manager', 'Cost Management']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        subtitle="Intelligent Digital Transformation Framework"
        title="The Intelligence of Everything"
        description="Our comprehensive transformation framework leverages the Intelligent Cloud Platform to enable productivity, data intelligence, security, and management across your organization."
        primaryCTA={{
          text: "Explore Framework",
          href: "#framework"
        }}
        secondaryCTA={{
          text: "Download Guide",
          href: "/resources"
        }}
        features={[
          "Proven transformation methodology",
          "Intelligence of Everything approach",
          "Microsoft-certified expertise",
          "Measurable business outcomes"
        ]}
        backgroundType="gradient"
      />

      {/* Framework Overview */}
      <SectionWrapper id="framework" background="default" padding="xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Framework
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Intelligence of Everything
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your organization through three core pillars supported by our 
            Intelligent Cloud Platform, enabling comprehensive digital evolution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {transformationPillars.map((pillar, index) => (
            <Card key={index} className="bg-gradient-card hover:shadow-lg transition-all duration-300 border-0">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <pillar.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-destructive mb-2">Problem</h4>
                  <p className="text-sm text-muted-foreground">{pillar.problem}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-2">Solution</h4>
                  <p className="text-sm text-muted-foreground">{pillar.solution}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-success mb-2">Benefits</h4>
                  <div className="space-y-1">
                    {pillar.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Intelligent Cloud Platform */}
      <SectionWrapper background="muted" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <Badge variant="outline" className="mb-4">
                Platform Capabilities
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Intelligent Cloud Platform
              </h2>
              <p className="text-lg text-muted-foreground">
                Our cloud-first approach leverages Microsoft Azure and the Microsoft 
                ecosystem to deliver comprehensive capabilities across four key areas.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {platformCapabilities.map((capability, index) => (
                <Card key={index} className="p-4">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-semibold">{capability.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-xs text-muted-foreground mb-3">{capability.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {capability.tools.slice(0, 2).map((tool, toolIndex) => (
                        <Badge key={toolIndex} variant="secondary" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                      {capability.tools.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{capability.tools.length - 2}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-gradient-primary text-primary-foreground border-0 p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Cloud className="w-8 h-8" />
                  <h3 className="text-xl font-bold">Platform Benefits</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5" />
                    <span>Enhanced productivity and collaboration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5" />
                    <span>Enterprise-grade security and compliance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-5 h-5" />
                    <span>Scalable and flexible infrastructure</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="w-5 h-5" />
                    <span>Data-driven insights and intelligence</span>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-4">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold text-primary">99.9%</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-sm text-muted-foreground">Platform Uptime</p>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold text-success">50%</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-sm text-muted-foreground">Faster Deployment</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Transformation Outcomes */}
      <SectionWrapper background="default" padding="xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Business Outcomes
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Optimize. Transform. Evolve.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our intelligent transformation framework delivers measurable results across 
            operations, products, and entire industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center p-8 bg-gradient-card border-0">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Optimize Operations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Streamline processes, reduce costs, and improve efficiency through intelligent automation.
              </p>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">40%</div>
                <p className="text-sm text-muted-foreground">Average cost reduction</p>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center p-8 bg-gradient-card border-0">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <CardTitle className="text-xl">Transform Products</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Innovate and enhance products with AI, IoT, and intelligent features.
              </p>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-accent">2x</div>
                <p className="text-sm text-muted-foreground">Faster innovation cycles</p>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center p-8 bg-gradient-card border-0">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-success/10 rounded-full w-fit">
                <Target className="w-8 h-8 text-success" />
              </div>
              <CardTitle className="text-xl">Evolve Industries</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Lead industry transformation with cutting-edge solutions and best practices.
              </p>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-success">85%</div>
                <p className="text-sm text-muted-foreground">Customer satisfaction</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper background="primary" padding="xl">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Start Your Intelligent Transformation
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Partner with us to unlock the full potential of your organization through 
            our proven intelligent transformation framework.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button variant="gradient" size="lg" className="group bg-white text-primary hover:bg-gray-100">
              Schedule Assessment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Download Framework Guide
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default IntelligentTransformation;