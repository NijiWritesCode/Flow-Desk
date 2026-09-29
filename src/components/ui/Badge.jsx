import React from 'react';
import { cn } from '../../lib/utils';

export const Badge = React.forwardRef(({ className, variant = 'default', children, ...props }, ref) => {
  const variants = {
    default: "bg-[var(--accent-light)] text-[var(--accent-primary)]",
    success: "bg-[var(--status-success-bg)] text-[var(--status-success)]",
    warning: "bg-[var(--status-warning-bg)] text-[var(--status-warning)]",
    danger: "bg-[var(--status-danger-bg)] text-[var(--status-danger)]",
    info: "bg-[var(--status-info-bg)] text-[var(--status-info)]",
    outline: "border border-[var(--border-primary)] text-[var(--text-secondary)]",
    gray: "bg-[var(--bg-hover)] text-[var(--text-secondary)]"
  };

  return (
    <span
      ref={ref}
      className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors", variants[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
});
Badge.displayName = "Badge";
