import { useState } from 'react';

const Logo = ({ className = '', variant = 'dark', size = 'md' }: { className?: string; variant?: 'dark' | 'light'; size?: 'sm' | 'md' | 'lg' }) => {
  const [imgError, setImgError] = useState(false);
  const sizeClasses = { sm: 'h-10', md: 'h-12', lg: 'h-14' };

  if (imgError) {
    return (
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-serif text-xl font-bold shrink-0 ${
        variant === 'light' ? 'bg-accent text-primary' : 'bg-primary text-white'
      } ${className}`}>
        TB
      </div>
    );
  }

  return (
    <img 
      src="/images/logo.png" 
      alt="Twomey Bros Garden Rooms & Construction" 
      className={`${sizeClasses[size]} w-auto object-contain shrink-0 ${className}`}
      onError={() => setImgError(true)}
    />
  );
};

export default Logo;
