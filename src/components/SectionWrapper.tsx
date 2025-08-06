import React from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: 'default' | 'muted' | 'gradient' | 'primary';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className,
  containerClassName,
  background = 'default',
  padding = 'lg',
  id
}) => {
  const getBackgroundStyles = () => {
    switch (background) {
      case 'muted':
        return 'bg-muted/30';
      case 'gradient':
        return 'bg-gradient-secondary';
      case 'primary':
        return 'bg-primary text-primary-foreground';
      default:
        return 'bg-background';
    }
  };

  const getPaddingStyles = () => {
    switch (padding) {
      case 'none':
        return '';
      case 'sm':
        return 'py-8';
      case 'md':
        return 'py-12';
      case 'lg':
        return 'py-16';
      case 'xl':
        return 'py-24';
      default:
        return 'py-16';
    }
  };

  return (
    <section
      id={id}
      className={cn(
        getBackgroundStyles(),
        getPaddingStyles(),
        className
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;