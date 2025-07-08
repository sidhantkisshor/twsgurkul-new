import React from 'react';
import { cn } from '../utils/cn';

interface SectionHeaderProps {
  badge?: {
    icon?: React.ReactNode;
    text: string;
  };
  title: string | { line1: string; line2: string };
  subtitle?: string;
  centered?: boolean;
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
  className = '',
  gradientFrom = 'from-white',
  gradientTo = 'to-gray-300'
}) => {
  return (
    <div className={cn(
      centered && "text-center",
      "mb-16",
      className
    )}>
      {/* Badge */}
      {badge && (
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-white/10 mb-8">
          {badge.icon}
          <span className="text-sm text-gray-300">{badge.text}</span>
        </div>
      )}

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        {typeof title === 'string' ? (
          <span className={cn(
            "bg-gradient-to-r bg-clip-text text-transparent",
            gradientFrom,
            gradientTo
          )}>
            {title}
          </span>
        ) : (
          <>
            <span className="bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
              {title.line1}
            </span>
            <br />
            <span className={cn(
              "bg-gradient-to-r bg-clip-text text-transparent",
              gradientFrom,
              gradientTo
            )}>
              {title.line2}
            </span>
          </>
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className={cn(
          "text-xl text-gray-400 leading-relaxed",
          centered && "max-w-3xl mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;

// Usage examples:
// <SectionHeader 
//   badge={{ icon: <Star className="w-4 h-4" />, text: "Featured" }}
//   title="Our Services"
//   subtitle="We provide the best trading education"
// />

// <SectionHeader 
//   title={{ line1: "Transform Your", line2: "Trading Journey" }}
//   gradientFrom="from-purple-400"
//   gradientTo="to-green-400"
// />