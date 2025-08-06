import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Building, 
  Factory, 
  Banknote, 
  GraduationCap, 
  ShoppingCart,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Building,
      title: 'Government',
      subtitle: 'Citizen-Centric Digital Services',
      description: 'Transform public services with intelligent automation, enhanced citizen engagement, and transparent governance solutions.',
      challenges: [
        'Legacy system modernization',
        'Citizen service digitization',
        'Regulatory compliance',
        'Cross-agency collaboration'
      ],
      solutions: [
        'Digital service portals',
        'Automated workflows',
        'Data analytics and insights',
        'Secure cloud infrastructure'
      ],
      benefits: [
        '50% faster service delivery',
        '40% reduction in operational costs',
        '90% citizen satisfaction improvement',
        'Enhanced transparency and accountability'
      ],
      href: '/industries/government',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Factory,
      title: 'Manufacturing & Resources',
      subtitle: 'Industry 4.0 Transformation',
      description: 'Enable smart manufacturing with IoT, predictive maintenance, and intelligent supply chain solutions.',
      challenges: [
        'Equipment downtime',
        'Supply chain visibility',
        'Quality control',
        'Workforce safety'
      ],
      solutions: [
        'IoT and connected devices',
        'Predictive analytics',
        'Digital twins',
        'Automated quality systems'
      ],
      benefits: [
        '30% reduction in downtime',
        '25% improvement in efficiency',
        '20% cost savings',
        'Real-time operational insights'
      ],
      href: '/industries/manufacturing',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: Banknote,
      title: 'Financial Services',
      subtitle: 'Digital Banking & Fintech Innovation',
      description: 'Accelerate digital transformation with secure, compliant, and customer-centric financial solutions.',
      challenges: [
        'Regulatory compliance',
        'Digital customer experience',
        'Risk management',
        'Legacy system integration'
      ],
      solutions: [
        'Digital banking platforms',
        'AI-powered risk analytics',
        'Automated compliance',
        'Customer engagement tools'
      ],
      benefits: [
        '60% faster loan processing',
        '45% improvement in customer experience',
        '35% reduction in compliance costs',
        'Enhanced fraud detection'
      ],
      href: '/industries/financial',
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      subtitle: 'Digital Learning & Academic Excellence',
      description: 'Transform education with intelligent learning platforms, collaborative tools, and data-driven insights.',
      challenges: [
        'Student engagement',
        'Learning outcome measurement',
        'Administrative efficiency',
        'Remote learning capabilities'
      ],
      solutions: [
        'Learning management systems',
        'Collaborative platforms',
        'Analytics and reporting',
        'Virtual classroom solutions'
      ],
      benefits: [
        '40% increase in student engagement',
        '50% improvement in learning outcomes',
        '30% reduction in administrative costs',
        'Enhanced teacher productivity'
      ],
      href: '/industries/education',
      color: 'text-info',
      bgColor: 'bg-info/10'
    },
    {
      icon: ShoppingCart,
      title: 'Retail & Consumer Goods',
      subtitle: 'Omnichannel Customer Experience',
      description: 'Create personalized shopping experiences with AI-powered insights, inventory optimization, and customer analytics.',
      challenges: [
        'Omnichannel integration',
        'Inventory management',
        'Customer personalization',
        'Supply chain optimization'
      ],
      solutions: [
        'Unified commerce platforms',
        'AI-powered recommendations',
        'Demand forecasting',
        'Customer analytics'
      ],
      benefits: [
        '35% increase in sales',
        '25% improvement in customer retention',
        '20% reduction in inventory costs',
        'Personalized customer experiences'
      ],
      href: '/industries/retail',
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    }
  ];

  const crossIndustryCapabilities = [
    {
      icon: TrendingUp,
      title: 'Data-Driven Insights',
      description: 'Transform raw data into actionable business intelligence across all industries.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security solutions meeting industry-specific regulations.'
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Intelligent automation to streamline operations and reduce manual effort.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        subtitle="Industry-Specific Expertise"
        title="Tailored Solutions for Every Sector"
        description="We understand the unique challenges and opportunities in each industry. Our specialized teams deliver targeted solutions that drive meaningful transformation across Government, Manufacturing, Financial Services, Education, and Retail sectors."
        primaryCTA={{
          text: "Explore Industries",
          href: "#industries"
        }}
        secondaryCTA={{
          text: "Industry Assessment",
          href: "/contact"
        }}
        features={[
          "Deep industry expertise and experience",
          "Sector-specific solution accelerators",
          "Regulatory compliance and security",
          "Proven track record across verticals"
        ]}
        backgroundType="gradient"
      />

      {/* Industry Overview */}
      <SectionWrapper id="industries" background="default" padding="xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Industry Focus
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Specialized Solutions by Industry
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each industry has unique requirements, regulations, and challenges. Our specialized 
            approach ensures solutions are tailored to your sector's specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="bg-gradient-card hover:shadow-lg transition-all duration-300 border-0 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 ${industry.bgColor} rounded-lg`}>
                      <industry.icon className={`w-8 h-8 ${industry.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{industry.title}</CardTitle>
                      <CardDescription className="text-sm font-medium">
                        {industry.subtitle}
                      </CardDescription>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">{industry.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-destructive mb-2">Key Challenges</h4>
                    <div className="space-y-1">
                      {industry.challenges.slice(0, 2).map((challenge, challengeIndex) => (
                        <div key={challengeIndex} className="text-muted-foreground">
                          • {challenge}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Our Solutions</h4>
                    <div className="space-y-1">
                      {industry.solutions.slice(0, 2).map((solution, solutionIndex) => (
                        <div key={solutionIndex} className="text-muted-foreground">
                          • {solution}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-success mb-2">Key Benefits</h4>
                    <div className="space-y-1">
                      {industry.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="text-muted-foreground">
                          • {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <Link to={industry.href}>
                    <Button variant="outline" className="w-full group">
                      Explore {industry.title} Solutions
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Cross-Industry Capabilities */}
      <SectionWrapper background="muted" padding="xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Universal Capabilities
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Common Threads Across Industries
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            While each industry is unique, certain capabilities are fundamental to 
            digital transformation success across all sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {crossIndustryCapabilities.map((capability, index) => (
            <Card key={index} className="text-center p-8 bg-gradient-card border-0">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <capability.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{capability.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{capability.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-primary text-primary-foreground border-0 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Industry Success Stories</h3>
              <p className="text-primary-foreground/90">
                Our track record spans across all major industries with measurable results 
                and transformational outcomes.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">2,500+</div>
                  <div className="text-sm text-primary-foreground/80">Customers Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">20+</div>
                  <div className="text-sm text-primary-foreground/80">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Recent Industry Wins</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Qatar Charity - 40% IT cost reduction</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>MOCI Qatar - 46 digital services launched</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Saudia Academy - 2x training efficiency</span>
                </div>
              </div>
              <Button variant="gradient" className="bg-white text-primary hover:bg-gray-100">
                View All Case Studies
              </Button>
            </div>
          </div>
        </Card>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper background="gradient" padding="xl">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with our industry experts to discover how we can help accelerate 
            your digital transformation with proven, sector-specific solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button variant="hero" size="lg" className="group">
              Schedule Industry Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Download Industry Guide
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Industries;