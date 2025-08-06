import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Linkedin, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Award,
  Users,
  Globe
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Solutions',
      links: [
        { name: 'Intelligent Transformation', href: '/intelligent-transformation' },
        { name: 'Business Applications', href: '/solutions#business-apps' },
        { name: 'Application Innovation', href: '/solutions#app-innovation' },
        { name: 'IoT & Connected Products', href: '/solutions#iot' },
        { name: 'Microsoft Copilot', href: '/solutions#copilot' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Advisory Services', href: '/services#advisory' },
        { name: 'Project Services', href: '/services#project' },
        { name: 'Managed Services', href: '/services#managed' },
        { name: 'Azure Cloud Services', href: '/services#azure' },
        { name: '24/7 Support', href: '/services#support' },
      ]
    },
    {
      title: 'Industries',
      links: [
        { name: 'Government', href: '/industries/government' },
        { name: 'Manufacturing & Resources', href: '/industries/manufacturing' },
        { name: 'Financial Services', href: '/industries/financial' },
        { name: 'Education', href: '/industries/education' },
        { name: 'Retail & Consumer Goods', href: '/industries/retail' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'News & Updates', href: '/news' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
      ]
    }
  ];

  const stats = [
    { icon: Users, label: '1,000+ Certified Professionals', value: '1K+' },
    { icon: Globe, label: '2,500+ Customers Served', value: '2.5K+' },
    { icon: Award, label: 'Microsoft Gold Partner', value: '20+ Years' },
  ];

  return (
    <footer className="bg-gradient-card border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">N</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Netways</h3>
                <p className="text-sm text-muted-foreground">Intelligent Digital Transformation</p>
              </div>
            </div>
            
            <p className="text-muted-foreground max-w-md">
              Leading Microsoft Gold Partner delivering intelligent digital transformation 
              solutions across MENA and North America. Empowering organizations with 
              cutting-edge technology and expert guidance.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-surface-elevated rounded-lg">
                  <stat.icon className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label.split(' ')[0]}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">info@netways.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Multiple locations across MENA & North America</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="outline" size="icon">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Netways. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Award className="w-4 h-4 text-primary" />
            <span>Microsoft Gold Partner & Inner Circle Member</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;