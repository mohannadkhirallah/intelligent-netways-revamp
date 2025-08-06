import React from 'react';
import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Building2, 
  Rocket, 
  Wifi,
  Brain,
  BarChart3,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  Users
} from 'lucide-react';

const Solutions = () => {
  const solutionAreas = [
    {
      icon: Building2,
      title: 'Business Applications',
      description: 'Unified CRM/ERP solutions with Dynamics 365',
      tools: ['Dynamics 365 Sales', 'Dynamics 365 Customer Service', 'Dynamics 365 Finance', 'Dynamics 365 Supply Chain'],
      benefits: [
        'Unified customer view across all touchpoints',
        'Streamlined business processes and workflows',
        'Real-time business insights and reporting',
        'Improved customer satisfaction and retention'
      ],
      useCases: [
        'Sales force automation and opportunity management',
        'Customer service and support optimization',
        'Financial management and compliance',
        'Supply chain and inventory optimization'
      ],
      color: 'text-primary'
    },
    {
      icon: Rocket,
      title: 'Application Innovation',
      description: 'Low-code development with Power Platform',
      tools: ['Power Apps', 'Power Automate', 'Power BI', 'Power Virtual Agents'],
      benefits: [
        'Rapid application development and deployment',
        'Citizen developer empowerment',
        'Automated workflows and processes',
        'Self-service analytics and insights'
      ],
      useCases: [
        'Custom business applications without coding',
        'Process automation and digital workflows',
        'Interactive dashboards and reports',
        'AI-powered chatbots and virtual assistants'
      ],
      color: 'text-accent'
    },
    {
      icon: Wifi,
      title: 'IoT & Connected Products',
      description: 'Intelligent edge computing with Azure IoT',
      tools: ['Azure IoT Hub', 'IoT Central', 'Digital Twins', 'IoT Edge'],
      benefits: [
        'Real-time monitoring and control',
        'Predictive maintenance capabilities',
        'Enhanced product experiences',
        'New revenue streams and business models'
      ],
      useCases: [
        'Smart manufacturing and Industry 4.0',
        'Connected vehicle and fleet management',
        'Smart building and energy management',
        'Remote monitoring and diagnostics'
      ],
      color: 'text-success'
    }
  ];

  const copilotCapabilities = [
    {
      icon: Brain,
      title: 'Microsoft 365 Copilot',
      description: 'AI assistant for productivity apps',
      features: ['Document creation', 'Email assistance', 'Meeting summaries', 'Data insights']
    },
    {
      icon: BarChart3,
      title: 'Copilot for Sales',
      description: 'AI-powered sales acceleration',
      features: ['Lead qualification', 'Opportunity insights', 'Email automation', 'Pipeline forecasting']
    },
    {
      icon: Users,
      title: 'Copilot for Service',
      description: 'Enhanced customer service',
      features: ['Case resolution', 'Knowledge base', 'Response suggestions', 'Sentiment analysis']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        subtitle="Intelligent Solution Portfolio"
        title="Transform with Microsoft Technologies"
        description="Leverage the power of Business Applications, Application Innovation, and IoT solutions enhanced with Microsoft Copilot to drive business growth and operational excellence."
        primaryCTA={{
          text: "Explore Solutions",
          href: "#solutions"
        }}
        secondaryCTA={{
          text: "Schedule Demo",
          href: "/contact"
        }}
        features={[
          "Unified CRM/ERP with Dynamics 365",
          "Low-code development with Power Platform",
          "AI-powered insights with Copilot",
          "Connected devices with Azure IoT"
        ]}
        backgroundType="gradient"
      />

      {/* Solution Areas */}
      <SectionWrapper id="solutions" background="default" padding="xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Solution Areas
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Three Pillars of Digital Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive solution portfolio covers the full spectrum of business needs, 
            from core applications to cutting-edge innovation platforms.
          </p>
        </div>

        <div className="space-y-12">
          {solutionAreas.map((solution, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <solution.icon className={`w-8 h-8 ${solution.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{solution.title}</h3>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Benefits</h4>
                    <div className="space-y-2">
                      {solution.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Use Cases</h4>
                    <div className="space-y-2">
                      {solution.useCases.slice(0, 3).map((useCase, useCaseIndex) => (
                        <div key={useCaseIndex} className="flex items-start space-x-2 text-sm">
                          <Target className="w-4 h-4 text-primary mt-0.5" />
                          <span className="text-muted-foreground">{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Microsoft Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="secondary">{tool}</Badge>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="group">
                  Learn More About {solution.title}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <Card className="bg-gradient-card border-0 p-8">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className={`mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit`}>
                        <solution.icon className={`w-12 h-12 ${solution.color}`} />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">Solution Highlight</h4>
                    </div>
                    
                    {/* Dynamic content based on solution type */}
                    {index === 0 && (
                      <div className="text-center space-y-4">
                        <div className="text-3xl font-bold text-primary">360°</div>
                        <p className="text-sm text-muted-foreground">Complete customer view across all business processes</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold text-foreground">Sales Growth</div>
                            <div className="text-accent">+25%</div>
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">Process Efficiency</div>
                            <div className="text-success">+40%</div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {index === 1 && (
                      <div className="text-center space-y-4">
                        <div className="text-3xl font-bold text-accent">10x</div>
                        <p className="text-sm text-muted-foreground">Faster application development with low-code platform</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold text-foreground">Dev Speed</div>
                            <div className="text-accent">10x Faster</div>
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">Cost Savings</div>
                            <div className="text-success">60%</div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {index === 2 && (
                      <div className="text-center space-y-4">
                        <div className="text-3xl font-bold text-success">99.9%</div>
                        <p className="text-sm text-muted-foreground">Device uptime with predictive maintenance</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold text-foreground">Downtime Reduction</div>
                            <div className="text-success">85%</div>
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">Cost Savings</div>
                            <div className="text-primary">30%</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Microsoft Copilot */}
      <SectionWrapper background="muted" padding="xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            AI-Powered Productivity
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Microsoft Copilot Integration
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enhance every solution with AI-powered assistance that understands your business 
            context and amplifies human capability across all applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {copilotCapabilities.map((copilot, index) => (
            <Card key={index} className="bg-gradient-card hover:shadow-lg transition-all duration-300 border-0 text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <copilot.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{copilot.title}</CardTitle>
                <CardDescription>{copilot.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {copilot.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <Zap className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-primary text-primary-foreground border-0 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Transform Work with AI</h3>
              <p className="text-primary-foreground/90">
                Microsoft Copilot brings the power of large language models to your business 
                applications, enabling natural language interactions and intelligent automation.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Context-aware AI assistance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Natural language commands</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Secure and compliant AI</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="space-y-4">
                <div className="text-4xl font-bold">70%</div>
                <p className="text-primary-foreground/80">Productivity improvement with Copilot</p>
                <Button variant="gradient" className="bg-white text-primary hover:bg-gray-100">
                  Explore Copilot Solutions
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper background="gradient" padding="xl">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to Innovate?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how our solutions can transform your business processes, 
            enhance customer experiences, and drive operational excellence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button variant="hero" size="lg" className="group">
              Schedule Solution Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Download Solution Guide
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Solutions;