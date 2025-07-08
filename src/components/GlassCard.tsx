import React from 'react';
import { cn } from '../utils/cn';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: 'purple-green' | 'blue-purple' | 'green-blue' | 'orange-red' | 'none';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hover = true,
  gradient = 'none',
  padding = 'md',
  onClick
}) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };

  const gradientClasses = {
    'purple-green': 'from-purple-500/10 to-green-500/10',
    'blue-purple': 'from-blue-500/10 to-purple-500/10',
    'green-blue': 'from-green-500/10 to-blue-500/10',
    'orange-red': 'from-orange-500/10 to-red-500/10',
    'none': ''
  };

  return (
    <div className="relative group" onClick={onClick}>
      {/* Gradient background on hover */}
      {hover && gradient !== 'none' && (
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          gradientClasses[gradient]
        )} />
      )}
      
      {/* Glass card */}
      <div className={cn(
        "relative glass-effect rounded-3xl border border-white/10 transition-all duration-300",
        hover && "hover:border-white/20 hover:transform hover:scale-[1.02]",
        paddingClasses[padding],
        className
      )}>
        {children}
      </div>
    </div>
  );
};

export default GlassCard;

// Usage examples:
// <GlassCard gradient="purple-green" padding="lg">
//   <h3>Title</h3>
//   <p>Content</p>
// </GlassCard>

// For clickable cards:
// <GlassCard hover gradient="blue-purple" onClick={() => navigate('/page')}>
//   <h3>Clickable Card</h3>
// </GlassCard>