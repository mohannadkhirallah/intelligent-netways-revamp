import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState('');
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Intelligent Transformation', 
      href: '/intelligent-transformation'
    },
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    {
      name: 'Industries',
      href: '/industries',
      dropdown: [
        { name: 'Government', href: '/industries/government' },
        { name: 'Manufacturing & Resources', href: '/industries/manufacturing' },
        { name: 'Financial Services', href: '/industries/financial' },
        { name: 'Education', href: '/industries/education' },
        { name: 'Retail & Consumer Goods', href: '/industries/retail' },
      ]
    },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'About', href: '/about' },
    { name: 'News', href: '/news' },
    { name: 'Careers', href: '/careers' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-bold text-foreground">Netways</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(item.name)}
                    onMouseLeave={() => setDropdownOpen('')}
                  >
                    <Button
                      variant="ghost"
                      className={cn(
                        "flex items-center space-x-1 text-muted-foreground hover:text-foreground",
                        isActive(item.href) && "text-primary"
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                    {dropdownOpen === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-popover border border-border rounded-lg shadow-lg py-2 z-50">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className={cn(
                              "block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors",
                              isActive(subItem.href) && "text-primary bg-accent"
                            )}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link to={item.href}>
                    <Button
                      variant="ghost"
                      className={cn(
                        "text-muted-foreground hover:text-foreground",
                        isActive(item.href) && "text-primary"
                      )}
                    >
                      {item.name}
                    </Button>
                  </Link>
                )}
              </div>
            ))}
            <Button variant="hero" size="sm" className="ml-4">
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={cn(
                      "block px-3 py-2 text-base font-medium rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors",
                      isActive(item.href) && "text-primary bg-accent"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className={cn(
                            "block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors rounded-md",
                            isActive(subItem.href) && "text-primary bg-accent"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button variant="hero" className="w-full">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;