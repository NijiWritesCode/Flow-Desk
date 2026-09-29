import React from 'react';
import { cn } from '../../lib/utils';

export const Avatar = React.forwardRef(({ className, src, alt, fallback, size = 'md', bgColor, ...props }, ref) => {
  const [error, setError] = React.useState(false);
  
  const sizes = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-16 w-16 text-lg",
    xl: "h-20 w-20 text-xl"
  };

  const dynamicStyle = bgColor ? { backgroundColor: bgColor } : {};

  return (
    <div
      ref={ref}
      style={dynamicStyle}
      className={cn("relative flex shrink-0 overflow-hidden rounded-full items-center justify-center", 
        !bgColor && "bg-[var(--accent-primary)]",
        "text-white", 
        sizes[size], className)}
      {...props}
    >
      {src && !error ? (
        <img
          src={src}
          alt={alt || "Avatar"}
          className="aspect-square h-full w-full object-cover"
          onError={() => setError(true)}
        />
      ) : (
        <span className="font-medium">{fallback}</span>
      )}
    </div>
  );
});
Avatar.displayName = "Avatar";
